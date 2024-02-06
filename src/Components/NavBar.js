import React, { useState } from "react";
// import { Link } from "react-scroll";
import {FaTimes,FaSearch} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import {Link} from 'react-router-dom'

const NavBar=()=> {
  return (
  <>
    
    <div className="h-10vh flex justify-between z-50 text-white lg:py-4 px-2 py-7 ">
         <div className="flex items-center flex-1">
             <span className="text-2xl align-bottom ml-6">
               Pursuit Software
             </span>
         </div>
         <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
            <ul className="flex gap-8 mr-16 text - {18px}">
        </ul>
            </div>
         </div>
         <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-base  bg-slate-500 w-40 text-white focus:outline-none px-2 py-1 border border-slate-500 rounded-full"
            />
            <FaSearch className="absolute top-2 right-2 text-white" />
          </div>
        </div>
    </div>
  </>
  );
}

export default NavBar;
