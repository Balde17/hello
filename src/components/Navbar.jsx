 import React from 'react'
 import {FaCartShopping} from "react-icons/fa6";
 import { DarkMode } from './DarkMode';
 import { Link } from 'react-scroll'; 
 
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
                <Link to="banner" className='inline-block p-4 hover:text-primary transition-all duration-200' smooth={true} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="skills" className='inline-block p-4 hover:text-primary transition-all duration-200' smooth={true} duration={500}>Skills</Link>
              </li>
              <li>
                <Link to="projects" className='inline-block p-4 hover:text-primary transition-all duration-200' smooth={true} duration={500}>Projects</Link>
              </li>
              <li>
                <Link to="services" className='inline-block p-4 hover:text-primary transition-all duration-200' smooth={true} duration={500}>Services</Link>
              </li>
              <li>
                <Link to="contact" className='inline-block p-4 hover:text-primary transition-all duration-200' smooth={true} duration={500}>Contact</Link>
              </li>
              <li>
                <Link to="about" className='inline-block p-4 hover:text-primary transition-all duration-200' smooth={true} duration={500}>About</Link>                
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