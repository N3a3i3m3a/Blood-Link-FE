import React from 'react';
import { RiMessageFill } from "react-icons/ri";

export default function Header() {
    return (
        <div className="bg-white h-16 flex items-center border-b border-gray-200 gap-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 w-full">
            
            <div>
                <RiMessageFill />
            </div>
            
            <div className="ml-auto">
                <button className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                    Logout
                </button>
            </div>
        </div>
    );
}
