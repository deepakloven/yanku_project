import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='nav_container'>
        <input type="checkbox" id="check"/>  
        <label for="check" className='menu_icn'><i className="fas fa-bars"></i></label>
        <label className='logo'>Yanku</label>
        <ul className='list_container'>
        <li><Link to='/main'><a className='active'href=''>Home</a></Link></li>
        <li><Link to='/about'><a href=''>About us</a></Link></li>
        <li><Link to='/services'><a href=''>Services</a></Link></li>
        <li><Link to='/news'><a href=''>News</a></Link></li>
        <li><a href=''>Contanct</a></li>
        </ul>
        </div>
      
    </div>

  )
}

export default Navbar
