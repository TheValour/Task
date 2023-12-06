import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <a href="/" className="navbar-container my-4">
      <span className='Romi'><img src="./img/logo.png" alt="ATG. WORLD" /></span>

      <input type="text" name="" id="" className='bg-gray-200 w-3/12 rounded-xl placeholder:text-xs ' placeholder='   Search for your favorite groups in ATG'/>

      <div>Create account. <span className='text-blue-700'>It's  free</span></div>
    </a>
  )
}

export default Navbar;
