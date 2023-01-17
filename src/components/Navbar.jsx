import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navActiveLink = ({isActive})=>{
        return {
            fontWeight:isActive ? 'bold' : 'normal',
            textDecoration:isActive ? 'none' : 'underline'
        }
    }

  return (
    <nav className='nav-link'>
        <NavLink style={navActiveLink} to='/'>Home</NavLink>
        <NavLink style={navActiveLink} to='/about'>About</NavLink>
        <NavLink style={navActiveLink} to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar