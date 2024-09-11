 import React from 'react'
 import {FaCartShopping} from "react-icons/fa6";
 import { DarkMode } from './DarkMode';
 
 const Navbar = () => {
   return (
    <>
     <div className="shadow-md dark:bg-gray-900 dark:text-white duration-200">
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          <div>
            <a href="#"
            className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
              Breyard
            </a>
          </div>
          <div className='flex gap-4 items-center'>
            <div>
              <DarkMode/>
            </div>
            <ul className='hidden sm:flex gap-4'>
              <li>
                <a href="#" className='inline-block p-4 hover:text-primary transition-all duration-200'>Home</a>
              </li>
              <li>
                <a href="#" className='inline-block p-4 hover:text-primary transition-all duration-200'>Skills</a>
              </li>
              <li>
                <a href="#" className='inline-block p-4 hover:text-primary transition-all duration-200'>Services</a>
              </li>
              <li>
                <a href="#" className='inline-block p-4 hover:text-primary transition-all duration-200'>Home</a>
              </li>
              <li>
                <a href="#" className='inline-block p-4 hover:text-primary transition-all duration-200'>Contact</a>
              </li>
              <li>
                <a href="#" className='inline-block p-4 hover:text-primary transition-all duration-200'>About</a>
              </li>
            </ul>
            
          </div>
        </div>
        
      </div>
      
     </div>
     </>
   )
 }
 
 export default Navbar;