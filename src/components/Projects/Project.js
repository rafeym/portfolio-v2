import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='hero is-small' id='projects'>
      <div className='hero-body'>
        <div className='container has-text-left'>
          <h1 className='title is-size-2-desktop is-size-3-touch proj-h1'>
            Here are some of my projects <span className='wave'>🔨</span>
          </h1>
          <div className='border'></div>

          <div class='tile is-ancestor'>
            <div class='tile is-vertical'>
              <div class='tile'>
                <div class='tile is-parent'>
                  <article class='tile has-text-centered is-child notification proj-tile'>
                    <p class='title is-size-3-touch'>Covid-19 Tracker</p>
                    <p class='subtitle is-size-6-touch'>
                      A simple React Covid-19 tracker that uses the
                      covid19.mathdro API. Additon of ApexCharts to visually
                      represent the data in line and bar charts.
                    </p>
                    <ul className='tech-icons'>
                      <li>React</li>
                      <li>APIs</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                    <a
                      href='https://frosty-swirles-a443db.netlify.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='cta-btn'
                    >
                      Live Demo
                    </a>
                  </article>
                </div>

                <div class='tile is-parent'>
                  <article class='tile has-text-centered is-child notification proj-tile'>
                    <p class='title is-size-3-touch'>Link-Bucket</p>
                    <p class='subtitle is-size-6-touch'>
                      A React project bootstrapped with create-next-app. This
                      app allows users to store text and share it with friends
                      or on the internet.
                    </p>
                    <ul className='tech-icons'>
                      <li>React</li>
                      <li>Next</li>
                      <li>Mongo</li>
                      <li>Express</li>
                    </ul>
                    <a
                      href='https://link-bucket-af5wxq2gq-rafeym.vercel.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='cta-btn'
                    >
                      Live Demo
                    </a>
                  </article>
                </div>

                <div class='tile is-parent'>
                  <article class='tile has-text-centered is-child notification proj-tile'>
                    <p class='title is-size-3-touch'>Expense Tracker</p>
                    <p class='subtitle is-size-6-touch'>
                      A fullstack React application that allows a user to keep
                      track and be able to manage their expenses and income.
                    </p>
                    <ul className='tech-icons'>
                      <li>React</li>
                      <li>Mongo</li>
                      <li>Express</li>
                      <li>Node</li>
                    </ul>
                    <a href='#projects' className='cta-btn disabled'>
                      Coming Soon
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
