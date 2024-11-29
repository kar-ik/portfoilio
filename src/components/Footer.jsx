import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import {

    FaGithub,
    FaLinkedin,
 
    FaInstagram,
  } from "react-icons/fa6";
function Footer() {
  return (
    <div className='mb-8 mt-20'>
<div className='flex items-start justify-center'>
<a href='#'>
<p className='font-bold text-3xl m-2'>HS</p></a>

    </div>      
    <div className='flex items-center justify-center gap-8'>
        

        <a href='https://github.com/harshit3665' className="  hover:opacity-80 hover:text-blue-500" >< FaGithub/></a>
        <a href='https://www.linkedin.com/in/harshit-sharma-070b79256?' className="  hover:opacity-80 hover:text-blue-500" ><FaLinkedin/></a>
        <a href='https://www.instagram.com/harshit_sharma_7597?' className="  hover:opacity-80 hover:text-blue-500" ><FaInstagram/></a>

    </div>
    <p className='mt-8 text-center text-sm tracking-wide
    text-gray-400'>
        &copy;Harshit. All rigths reserved
    </p>
    </div>
  )
}

export default Footer
