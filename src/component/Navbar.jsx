import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white top-0 left-0  fixed z-50 w-full">
        <div className="flex md:justify-between flex-col md:flex-row  items-center p-5 bg-gray-800 text-white">
            <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0">
               <img
               className='w-full h-full object-cover object-top'
               src='/public/prash.jpeg'/>
            </div>
            <div className="flex gap-5 ">
                <HashLink smooth to="/#home" className='hover:text-emerald-400'>Home</HashLink>
                <HashLink smooth to="/#about"className='hover:text-emerald-400'>About</HashLink>
                <HashLink smooth to="/#contact"className='hover:text-emerald-400'>Contact</HashLink>
                <HashLink smooth to="/#skills"className='hover:text-emerald-400'>Skills</HashLink>
                <HashLink smooth to="/#projects"className='hover:text-emerald-400'>Project</HashLink>
            
              
            </div>
        </div>
    </div>
  );
};

export default Navbar