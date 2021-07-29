import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

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
        </div>
        <ul className='list'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </footer>
      <div className='small-footer'>&copy; Mohammad Rafey 2021</div>
    </>
  )
}

export default Footer
