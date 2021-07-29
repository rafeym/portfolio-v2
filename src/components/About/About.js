import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='hero is-large' id='about'>
      <div className='hero-body'>
        <section className='section'>
          <div className='container'>
            <div className='columns is-vcentered'>
              <div className='column is-4'>
                <h1 className='is-size-2 title about-title'>
                  About me<span>📚</span>
                </h1>
                <div className='border' />
                <p>
                  Well hello again! I appreciate you scrolling this far! When it
                  comes to me, I'm a very curious and social individual. I enjoy
                  being around people and I'm always up to trying new things,
                  especailly when its outside my comfort zone. When it comes to
                  education, I studied at Sheridan College where I aquired my
                  advanced diploma in Software Development.
                </p>
              </div>
              <div className='column is-4'>
                <h1 className='is-size-2 title about-title'>
                  My Hobbies<span>🏓</span>
                </h1>
                <div className='border' />
                <p>
                  When it comes to hobbies I have one too many. But if I was to
                  list a few that I enjoy the most it would be, Photography,
                  Exercising, and Building Custom Keyboards. You ask, "Building
                  Custom Keyboards", well yes, it is a deep rabbit hole let me
                  warn you but the process is just so satisfying. Photography
                  and exercising are just equally satisfying too.
                </p>
              </div>

              <div className='column is-4'>
                <h1 className='is-size-2 title about-title'>
                  My Goals<span>✅</span>
                </h1>
                <div className='border' />
                <p>
                  Finally a bit about my future goals. One of my long term goals
                  is to own a photograpy business. As you can tell I really
                  enjoy photography and would love to make money from it!
                  Currently one of my short term goals is to transition out of
                  freelance and into an office environment. Dont get me wrong,
                  freelance has its own perks, but its time for some change!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
