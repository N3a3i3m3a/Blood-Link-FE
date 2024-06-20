import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDonateHeart } from "react-icons/bi";
import { HiOutlineLogout, HiMenu, HiX } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../constants';

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white';

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between bg-red-300 p-2 md:hidden">
                <div className="flex items-center gap-3">
                    {/* <BiSolidDonateHeart fontSize={24} /> */}
                    {!sidebarOpen && <span className="text-neutral-200 text-lg">Blood Link</span>}
                </div>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-2xl">
                    {sidebarOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            <div className={classNames("bg-red-300 h-screen p-3 flex flex-col gap-7 md:static md:block", sidebarOpen ? "block" : "hidden")}>
                <div className="flex items-center gap-2 px-1 py-3">
                    <BiSolidDonateHeart fontSize={24} />
                    <span className="text-neutral-200 text-lg">Blood Link</span>
                </div>
                <div className="py-8 pb-36 flex flex-1 flex-col gap-0.5">
                    {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
                </div>
                <div className="flex flex-col gap-0.5 mt-80 py-5 border-t border-white">
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
                    <div
                        className={classNames(linkClass, 'cursor-pointer text-red-500')}
                        onClick={handleLogout}
                    >
                        <span className="text-xl ">
                            <HiOutlineLogout />
                        </span>
                        Logout
                    </div>
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
