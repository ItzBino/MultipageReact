import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    
      <nav className='ul'>
        <li className='li'><NavLink className={(e) => { return e.isActive ? "active" : '' }} to='/'>Home</NavLink></li>
        <li className='li'><NavLink className={(e) => { return e.isActive ? "active" : '' }} to='/about'>About</NavLink></li>
        <li className='li'><NavLink className={(e) => { return e.isActive ? "active" : '' }} to='/user'>User</NavLink></li>
      </nav>
  )
}

export default Navbar
