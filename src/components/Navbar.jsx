import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DescriptionIcon from '@mui/icons-material/Description';
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
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                  LinkedIn <LinkedInIcon size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                  Github <GitHubIcon size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                  Email <MailOutlineIcon size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                  Resume <DescriptionIcon size={30} />
                </a>
              </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
