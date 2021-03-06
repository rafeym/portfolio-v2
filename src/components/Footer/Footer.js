import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin, FaFileAlt } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className='footer-wrapper'>
        <div className='social'>
          <a
            href='https://www.linkedin.com/in/rafeym/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='social-icon' />
          </a>
          <a
            href='https://www.github.com/rafeym'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub className='social-icon' />
          </a>
          <a href='mailto:mohammadrafey0@gmail.com'>
            <FaEnvelope className='social-icon' />
          </a>
          <a
            href='https://drive.google.com/file/d/1URrtx4x3navBAYAtBvpKnsOz9YPjHgBx/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <FaFileAlt className='social-icon' />
          </a>
        </div>
        <ul className='list'>
          <li>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <div>Projects</div>
            </Link>
          </li>
        </ul>
      </footer>
      <div className='small-footer'>&copy; Mohammad Rafey 2022</div>
    </>
  )
}

export default Footer
