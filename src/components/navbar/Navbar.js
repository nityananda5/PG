import React, { useState } from 'react'
import logo from '../../assets/logo.jpeg'
import close from '../../assets/close.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  // eslint-disable-next-line

  const [control, setControl] = useState(false);

  return (
    <>

      <div className='navbar'>
        <div className='navbar-logo'>
          <img className='nest-logo' src={logo} alt='MYNest' />
        </div>
        <div className='navbar-list'>

          <Link to='/' style={{ textDecoration: "none", color: "black" }}><li>HOME</li></Link>
          <Link to='/about' style={{ textDecoration: "none", color: "black" }}><li>ABOUT</li></Link>

          <Link to='/connect' style={{ textDecoration: "none", color: "black" }}><li>CONTACT</li></Link>

          {/* <li>SERVICES</li> */}
          {/* <li>CONTACT</li> */}


        </div>
        <div className='navbar-sign'>
          <button className='navbar-register'>Register</button>
          {/* <button className='navbar-register'>Sign In</button> */}

        </div>

        <div className='menu-close'>
          <div className='navbar-controls'>
            {control ? <img src={close} alt='close' className='close' onClick={() => setControl(!control)} /> : <img src={menu} alt='menu' className='menu' onClick={() => setControl(!control)} />}

          </div>


        </div>

      </div>
      {control &&
        <div className='navbar-list-mobile  mobile-left'>

          <Link to='/' style={{ textDecoration: "none", color: "white" }}><li>HOME</li></Link>
          <Link to='/about' style={{ textDecoration: "none", color: "white" }}><li>ABOUT</li></Link>
          <Link to='/connect' style={{ textDecoration: "none", color: "white" }}><li>CONTACT</li></Link>
          
          {/* <li>SIGN In</li> */}


        </div>
      }

    </>
  )
}

export default Navbar