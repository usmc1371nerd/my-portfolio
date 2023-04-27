import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {BsBookFill} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import {FaScrewdriver} from 'react-icons/fa'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
     <a href="#home"onClick={() => setActiveNav ('#home')}  className={activeNav === '#home' ? 'active' : ''}><AiFillHome/></a> 
     <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserCircle/></a> 
     <a href="#education" onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookFill/></a> 
     <a href="#projects"onClick={() => setActiveNav ('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaScrewdriver/></a> 
     <a href="#contact"onClick={() => setActiveNav ('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><MdPermContactCalendar/></a> 
    
    </nav>
  )
}

export default Nav