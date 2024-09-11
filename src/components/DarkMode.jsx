import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

// import DarkM from '../../public/lune.png'

export const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const element = document.documentElement;

  useEffect(() => {
    
    if (theme  === "dark"){
      element.classList.add("dark");
      element.classList.remove('light');
    }else{
      element.classList.add("light");
      element.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <div className=''>
      <button
        onClick={changeTheme}
        className=''>
        {theme === 'dark' ? <FaSun className="text-white" /> : <FaMoon className="text-yellow-500" />}
      </button>
    </div>
    </>
  )
}