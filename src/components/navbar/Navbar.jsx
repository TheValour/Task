import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <a href="/" className="navbar-container">
      <span className='Romi'>ATG WORLD</span>

      <ul className="navbar-menu" >
        {/* Your NavLink items go here */}
      </ul>

      <button className='trade flex align-center p-2'>Trade</button>
      <button className='wallet'>Connect Wallet</button>
    </a>
  )
}

export default Navbar;
