import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../assets/logo1.png';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt='logo image' style={{width: '50px'}} />
        </div>


        {/* menu */}
          <ul className="hidden md:flex">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Contact</li>
          </ul>
      

        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <MenuIcon /> : <CloseIcon />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl ">Home</li>
            <li className="py-6 text-4xl ">About</li>
            <li className="py-6 text-4xl ">Skills</li>
            <li className="py-6 text-4xl ">Work</li>
            <li className="py-6 text-4xl ">Contact</li>
        </ul>

        {/* social icons */}
        <div className="hidden">

        </div>

    </div>
  )
}

export default Navbar
