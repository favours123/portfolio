import React, { useState } from 'react';
import { Link } from 'react-scroll';
import OutsideClickHandler from 'react-outside-click-handler';
import { BiMenuAltRight, BiSolidMoon, BiSolidSun, BiX } from "react-icons/bi"
const Header = () => {

  const Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" }
  ]

  let [open, setOpen] = useState(false)
  let [darkMode, setDarkMode] = useState(false)
  return (
      <div className='w-full max-w-7xl dark:bg-slate ' id='header'>
        <div className='md:flex items-center justify-between py-4 md:px-10  px-7'>
          {/* logo section */}
          <div className='text-2xl  cursor-pointer flex items-center gap-1 font-semibold m-2 '>
            <span className='text-primary hover:text-white'>Favours Excellence</span>
          </div>

          {/* Mobile Menu icons */}
          <div onClick={() => setOpen(!open)} className='w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute '>
            {
              open ? <BiX className='text-[30px]' /> : <BiMenuAltRight className='text-[30px]' />
            }
          </div>

          {/* Nav items */}
          <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 md:w-1/2 mt-4 md:mt-0 md:pl-0 md:mr-10 md:bg-transparent md:opacity-[1] rounded-xl bg-slate  w-[10rem] right-5  transition-all duration-500 ease-in 
        ${open ? "right-[40px]" : "opacity-0 "}`}>
              {
                Links.map(link => <li key={link.name} className={`md:pl-8 md:py-0 py-4 text-center hover:shadow-xl font-semibold  ${open ? "block" : "-right-[160px]"}`}>

                  <div className='p-3 dark:bg-slate2 bg-slate md:hidden w-1 absolute right-4 -top-2 rotate-45 rounded '></div>
                  <Link
                    to={link.link}
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    onClick={() => setOpen(false)}
                    className='text-white transition-all duration-500 cursor-pointer hover:text-primary'
                  >{link.name}</Link>
                </li>)
              }
            </ul>
          </OutsideClickHandler>


        </div>
    </div>
  );
}

export default Header;
