import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='hero is-large' id='projects'>
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
                    <p class='title is-size-3-touch'>Shantie's Bakery</p>
                    <p class='subtitle is-size-6-touch'>
                      Full stack e-commerce web application that allows users to
                      browse and purchase products. Admin dashboard to fulfill
                      orders and manage inventory.
                    </p>
                    <ul className='tech-icons'>
                      <li>React</li>
                      <li>Mongo</li>
                      <li>Express</li>
                      <li>Node</li>
                    </ul>
                    <div className='btn-container'>
                      <a
                        href='https://shanties-bakery-demo.vercel.app/'
                        className='cta-btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live Demo
                      </a>
                      <a
                        href='https://github.com/rafeym/shanties-bakery-demo'
                        className='cta-btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Code
                      </a>
                    </div>
                  </article>
                </div>

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
                    <div className='btn-container'>
                      <a
                        href='https://frosty-swirles-a443db.netlify.app/'
                        className='cta-btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live Demo
                      </a>
                      <a
                        href='https://github.com/rafeym/covid-19-tracker-app'
                        className='cta-btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Code
                      </a>
                    </div>
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
                    <div className='btn-container'>
                      <a
                        href='https://link-bucket-af5wxq2gq-rafeym.vercel.app/'
                        className='cta-btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live Demo
                      </a>
                      <a
                        href='https://github.com/rafeym/link-bucket'
                        className='cta-btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Code
                      </a>
                    </div>
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
