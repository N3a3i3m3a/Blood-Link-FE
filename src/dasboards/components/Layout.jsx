import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    return (
        <div className="bg-neutral-100 min-h-screen w-screen overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-64 w-full flex-shrink-0">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1">
                <Header />
                <div className="p-4 flex-1 z-10 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
