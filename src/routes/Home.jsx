import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen dark:bg-neutral-950 dark:text-white">
      <div className="container mx-auto p-6">
        <div className='flex justify-between mb-8 items-center'>
          <h1 className="md:text-4xl text-lg font-bold">Welcome to Car Models</h1>
          <button onClick={toggleDarkMode} className="dark:bg-neutral-950 dark:text-neutral-400 text-neutral-950 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        <p className="text-lg mb-6">
          Explore a wide range of car models from different brands. Click on a brand to see detailed information about each model, including videos and descriptions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/models" className="rounded-lg shadow-md p-4 text-neutral-950 text-center dark:bg-neutral-950 text-2xl font-semibold dark:text-neutral-400 border border-neutral-400 border-b-4 overflow-hidden relative px-4 py-2 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="text-2xl font-semibold bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            View Models
          </Link>
          <Link to="/news" className="rounded-lg shadow-md p-4 text-neutral-950 text-center dark:bg-neutral-950 text-2xl font-semibold dark:text-neutral-400 border border-neutral-400 border-b-4 overflow-hidden relative px-4 py-2 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="text-2xl font-semibold bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            News
          </Link>
          <Link to="/about" className="rounded-lg shadow-md p-4 text-neutral-950 text-center dark:bg-neutral-950 text-2xl font-semibold dark:text-neutral-400 border border-neutral-400 border-b-4 overflow-hidden relative px-4 py-2 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="text-2xl font-semibold bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            About Us
          </Link>
          <Link to="#" className="rounded-lg shadow-md p-4 text-neutral-950 text-center dark:bg-neutral-950 text-2xl font-semibold dark:text-neutral-400 border border-neutral-400 border-b-4 overflow-hidden relative px-4 py-2 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="text-2xl font-semibold bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Watch Videos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
