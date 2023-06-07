import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSpellBook} from 'react-icons/gi'
import {RiSuitcase2Line} from 'react-icons/ri'
import {TbMessageCircle} from 'react-icons/tb'
import { useState } from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav ("#")} className={activeNav === '#' ? 'active':''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav ("#about")} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#portfolio" onClick={() => setActiveNav ("#portfolio")} className = {activeNav === '#portfolio' ? 'active' : ''}><GiSpellBook /></a>
      <a href="#experience" onClick={() => setActiveNav ("#experience")} className = {activeNav === '#experience' ? 'active' : ''}><RiSuitcase2Line /></a>
      <a href="#contact" onClick={() => setActiveNav ("#contact")} className = {activeNav === '#contact' ? 'active' : ''}><TbMessageCircle /></a>
    </nav>
  )
}

export default Nav