import React from 'react'
import "./Footer.css"
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__image'>Jaynish Mandalia</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter /></a>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jaynish Mandalia. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer