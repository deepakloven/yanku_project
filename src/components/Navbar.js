import React from 'react'
import '../css/navbar.css'
// import backgroundImage from '../images/background.jpg'; // Import the image

const Navbar = () => {
  return (
    <div>
      <div className='nav_container'>
        <input type="checkbox" id="check"/>  
        <label for="check" className='menu_icn'><i className="fas fa-bars"></i></label>
        <label className='logo'>Yanku</label>
        <ul className='list_container'>
        <li><a className='active'href='a'>Home</a></li>
        <li><a href=''>About us</a></li>
        <li><a href=''>Services</a></li>
        <li><a href=''>News</a></li>
        <li><a href=''>Contanct</a></li>
        </ul>
        </div>
      
    </div>

  )
}

export default Navbar
