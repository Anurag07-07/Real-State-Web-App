import React, { useState } from 'react'
import {FaSearch,FaUser} from 'react-icons/fa'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {

  const [menuOption,setMenuOptions] = useState(false)
  const [dropDownMenu,setDropDownMenu] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = ()=>{
   setMenuOptions(menuOption => !menuOption) 
  }

  return (
    <div>
      <header className=' mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between rounded-2xl py-4'>
        {/* Logo */}
        <Link to={'/'} className=' text-[24px] font-[700] leading-[120%]' >
          <h4>Lease<span  className=' text-[#7a62fe]'>lodge</span></h4>
        </Link>
        {/* searchbar */}
        <div className=' bg-white ring-1 ring-slate-900/5 rounded-full p-2 px-4 w-44 sm:w-96 flex items-center justify-between gap-x-2 relative'>
          <input type='text' placeholder='Search Here..' className=' outline-none border-none w-full bg-white'></input>
          <button className=' absolute right-0 h-full w-10 rounded-full bg-[#7a62fe] text-white cursor-pointer flex items-center justify-center' ><FaSearch></FaSearch></button>
        </div>
        {/* dropdownmenu */}
        <div>
          <div>
            <div>
            <Link to={'/register'}>
              <FaUser></FaUser>
            </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header