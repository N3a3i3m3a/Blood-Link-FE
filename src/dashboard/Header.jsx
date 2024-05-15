import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className="header bg-gray-800 text-white flex justify-between items-center px-4 py-2">
      <div className="menu-icon">
        <BsJustify className="icon text-2xl cursor-pointer" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon text-xl" />
      </div>
      <div className="header-right flex items-center space-x-4">
        <BsFillBellFill className="icon text-xl" />
        <BsFillEnvelopeFill className="icon text-xl" />
        <BsPersonCircle className="icon text-xl" />
      </div>
    </header>
  );
}

export default Header;
