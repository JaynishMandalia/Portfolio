import React from 'react'
import './About.css'
import Me from '../../assets/Image.jpg'
import { FaAward } from 'react-icons/fa'
import { MdHistoryEdu } from 'react-icons/md'
import { VscFolder } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={Me} alt="About" className='about__me-image' />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Flutter, ReactJS, HTML,CSS, JS, C++, C# Intermediate level</small>
            </article>
            <article className='about__card'>
              <MdHistoryEdu className='about__icon' />
              <h5>Education</h5>
              <small>Currently Persuing B.Tech 4th Year Computer Enginner</small>
            </article>
            <a href="http://github.com/JaynishMandalia/" target="_blank" rel="noopener noreferrer">
              <article className='about__card'>
                <VscFolder className='about__icon' />
                <h5>Projects</h5>
                <small>Check All Projects Here</small>
              </article>
            </a>
          </div>
          <p>
            I have recently completed the Project on NFT, have completed the project of OnlineShop and Instagram Clone. Currently Learning UI designing in Flutter.
          </p>
          <a className='btn btn-primary' href='#contact'>Open To Work</a>
        </div>
      </div>
    </section>
  )
}

export default About