import React from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
// import { GiBookshelf } from 'react-icons/gi'
import { MdWorkOutline } from 'react-icons/md'
import { TbMessage } from 'react-icons/tb'
import { IoGitNetwork } from 'react-icons/io5'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><IoGitNetwork /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage /></a>
    </nav>
  )
}

export default Nav