import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={`${openSidebarToggle ? 'sidebar-responsive' : ''} bg-red-500 text-white`}>
      <div className='sidebar-title py-4 px-6 border-b border-red-500 flex justify-between items-center my-6'>
        <div className='flex items-center'>
          <BsCart3 className='icon_header text-2xl mr-2' />
          <span className='text-xl font-bold'>BloodLink</span>
        </div>
        <span className='icon text-xl cursor-pointer' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list py-4 px-6'>
        <li className='sidebar-list-item mb-4'>
          <a href="#" className='flex items-center'>
            <BsGrid1X2Fill className='icon text-xl mr-2' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item mb-4'>
          <a href="#" className='flex items-center'>
            <BsFillArchiveFill className='icon text-xl mr-2' /> Donars 
          </a>
        </li>
        <li className='sidebar-list-item mb-4'>
          <a href="#" className='flex items-center'>
            <BsFillGrid3X3GapFill className='icon text-xl mr-2' /> Hospitals
          </a>
        </li>
        {/* <li className='sidebar-list-item mb-4'>
          <a href="#" className='flex items-center'>
            <BsPeopleFill className='icon text-xl mr-2' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item mb-4'>
          <a href="#" className='flex items-center'>
            <BsListCheck className='icon text-xl mr-2' /> Inventory
          </a>
        </li> */}
        <li className='sidebar-list-item mb-4'>
          <a href="#" className='flex items-center'>
            <BsMenuButtonWideFill className='icon text-xl mr-2' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#" className='flex items-center'>
            <BsFillGearFill className='icon text-xl mr-2' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
