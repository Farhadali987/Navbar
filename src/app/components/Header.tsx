"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-lime-300 text-white font-bold ">
      <div className="flex items-center justify-between py-4 px-10">
        <nav>
          <ul className="flex items-center gap-8">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/education" className="hover:underline">Education</Link></li>
            <li><Link href="/skills" className="hover:underline">Skills</Link></li>
          </ul>
        </nav>
        <button 
          id="btn1"  
          className="bg-red-800 text-cyan-50 font-bold py-2 px-4 rounded hover:bg-violet-800 transition duration-300"
        >
          Register
        </button>
        <i className="fa-solid fa-bars hidden md:inline-block"></i>
      </div>
    </header>
  );
}

export default Header;

