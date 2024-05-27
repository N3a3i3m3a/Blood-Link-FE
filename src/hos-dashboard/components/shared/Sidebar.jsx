import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { HiOutlineLogout } from 'react-icons/hi';
import axios from 'axios';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white';

export default function Sidebar() {
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState('');

    const handleLogout = async () => {
        try {
            await axios.post('https://blood-link-be.onrender.com/api/user/logout'); // Adjust the URL as necessary
            setLogoutMessage('Logout successful!');
            navigate('/login', { state: { message: 'Logout successful!' } }); // Redirect to the login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="bg-gray-500 w-60 p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
                <BiSolidDonateHeart fontSize={24} />
                <span className="text-neutral-200 text-lg">Hospital</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-white">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div 
                    className={classNames(linkClass, 'cursor-pointer text-red-500')} 
                    onClick={handleLogout}
                >
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ link }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-red-500 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    );
}
