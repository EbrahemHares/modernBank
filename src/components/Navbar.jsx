import React, {useState} from 'react'

import {close, logo, menu} from '../assets';
import {navLinks} from "../constants";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false); 
  return (
    <nav className="w-full flex py-6 justify-between items-center  ">
      <img src={logo} alt="hookbank" 
      className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((link,index) => (
          <li
          key={link.id}
          className={`font-poppins 
          font-normal cursor-pointer
          text-[16px] text-white ${index === navLinks.length -1 ? `mr-0` :`mr-10`}`}>
            <a id={`#${link.id}`} >{link.title}</a>
          </li>
          ))
          }
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={
            toggleMenu ? close : menu 
          } onClick={()=>setToggleMenu((prev)=>!prev)}
          className={`cursor-pointer w-[28px] h-[28px] object-contain `}
          />
          <div className ={`${ toggleMenu ? `flex` : `hidden`} p-6 bg-black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
            <ul className="list-none flex justify-end  flex-col items-center flex-1" >
              {navLinks.map((link,index) => (
              <li
              key={link.id}
              className={`font-poppins 
              font-normal cursor-pointer
              text-[16px] text-white ${index === navLinks.length -1 ? `mr-0` :`mb-4`}`}>
                <a id={`#${link.id}`} >{link.title}</a>
              </li>
              ))
              }
        </ul>
          </div>
      </div>
    </nav>
  ) 
}

export default Navbar