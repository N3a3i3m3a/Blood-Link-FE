import React from 'react';
import { RiMessageFill } from "react-icons/ri";

export default function Header() {
    return (
        <div className="bg-white h-16 flex items-center border-b border-gray-200 px-4 xl:w-screen md:px-20 sm:px-6 md:px-8 lg:px-16 xl:px-48 w-full">

            
            <div className="ml-auto">
                <button className="py-2 mr-48 px-4 bg-black text-white rounded-md text-sm hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    );
}
