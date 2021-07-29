import React, { useState } from 'react'

import { Link } from 'react-scroll'

import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='navbar'>
        <div className='nav-container'>
          <a href='#home' className='nav-logo'>
            Mohammad Rafey
          </a>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
              >
                <div className='nav-links' onClick={handleClick}>
                  Home
                </div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
              >
                <div className='nav-links' onClick={handleClick}>
                  Projects
                </div>
              </Link>
            </li>
            <li className='nav-item' onClick={handleClick}>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
              >
                <div className='nav-links' onClick={handleClick}>
                  About
                </div>
              </Link>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  )
}

export default Navbar
