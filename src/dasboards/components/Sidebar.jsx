import React from 'react';
import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDonateHeart } from "react-icons/bi";
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../constants';

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white'; // Updated to include text-white class

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from local storage or context
        localStorage.removeItem('user'); // Example: Clearing user data from local storage

        // Navigate to the login page
        navigate('/login');
    };

    return (
        <div className="bg-red-300 w-60 p-3 flex flex-col gap-7">
            <div className="flex items-center gap-2 px-1 py-3">
                <BiSolidDonateHeart fontSize={24} />
                <span className="text-neutral-200 text-lg">Blood Link</span>
            </div>
            <div className="py-8 pb-36 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 py-14 border-t border-white">
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
