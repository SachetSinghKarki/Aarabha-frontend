import React from 'react';
import { LuBell } from "react-icons/lu";
import { FaChevronDown } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='fixed z-50 w-full px-20 py-8 flex justify-between items-center bg-zinc-100 '>
      <div className='flex items-center gap-8'>
        <ul className='flex space-x-8'>
          <li className='font-bold text-2xl '>boostim</li>
         
          <li className='hover:text-gray-700 cursor-pointer flex items-center'>
            Service
            <FaChevronDown className='ml-1' />
          </li>
          <li className='hover:text-gray-700 cursor-pointer flex items-center'>
            Agency
            <FaChevronDown className='ml-1' />
          </li>
          <li className='hover:text-gray-700 cursor-pointer flex items-center'>
            Case Study
            <FaChevronDown className='ml-1' />
          </li>
          <li className='hover:text-gray-700 cursor-pointer flex items-center'>
            Resources
            <FaChevronDown className='ml-1' />
          </li>
          <li className='hover:text-gray-700 cursor-pointer flex items-center'>
            Contact
           
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <button className='px-4 py-2 border border-black text-black rounded-3xl'>Get Started</button>
        <div className='p-2 bg-black rounded-full'>
          <LuBell className='text-xl text-white cursor-pointer hover:text-gray-300 transition duration-300' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
