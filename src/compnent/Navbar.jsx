import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar =()=>{
    const [nav,setNav]= useState(false);
   const handlNav =()=>{
      setNav(!nav);
   };
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-[#00df9a] w-full text-3xl font-bold'>REACT. </h1>
         <div className='hidden md:flex'>
             <a href='#' className='p-4 hover:bg-gray-400'>Home</a>
             <a href='#' className='p-4 hover:bg-gray-400'>Company</a>
             <a href='#' className='p-4 hover:bg-gray-400'>Resources</a>
             <a href='#' className='p-4 hover:bg-gray-400'>About</a>
             <a href='#' className='p-4 hover:bg-gray-400'>Contact</a>
         </div>
         <div onClick={handlNav} className='block md:hidden'>
             {nav ?<AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
         </div>
        <div className={nav ?'fixed left-0 top-0 w-[60%] h-full border-r md:hidden border-r-gray-900 bg-[#000300] ' +
            'ease-in-out duration-500' :'fixed left-[-100%]'}>
            <h1 className='text-[#00df9a] w-full text-3xl font-bold m-4'>REACT. </h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>


        </div>
    )
}
export default Navbar;