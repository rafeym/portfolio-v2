import React from 'react'

import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero is-fullheight' id='home'>
      <div className='hero-body'>
        <div className='container has-text-left'>
          <h1 className='title is-size-1-desktop is-size-2-touch hero-title'>
            Hello! I'm <span>Mohammad</span> <span className='wave'>👋</span>
          </h1>
          <p className='is-size-4-touch is-size-3-desktop'>
            A web <span>developer</span> with a passion for creating{' '}
            <span>beautiful</span>, <span>responsive</span>,{' '}
            <span>user-friendly</span> web applications.
          </p>
          <p className='is-size-4-touch is-size-3-desktop'>
            I am actively looking for <span>developer</span> positions.{' '}
          </p>
          <p className='is-size-4-touch is-size-3-desktop'>
            Scroll down to see some of my projects!
          </p>
          <div className='container has-text-centered'>
            <FaArrowDown className='arrow bounce' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
