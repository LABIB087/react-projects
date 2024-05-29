import React from 'react'
import './Project1.css'
import imgLogo from './Images/logo.png'
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src={imgLogo} alt="" />
        </div>

        <ul>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Location</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>

        <button className="btn">Login</button>
      </nav>
    </div>
  )
}
