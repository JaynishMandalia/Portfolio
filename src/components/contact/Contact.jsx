import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1i5kskk', 'template_crji075', form.current, 'Ctgk5qLwKPLJfYVAU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me for Work</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jsunilmandalia2653@gmail.com</h5>
            <a href="mailto: jsunilmandalia2653@gmail.com" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9974397223</h5>
            <a href="https://api.whatsapp.com/send?phone=9974397223" target="_blank" rel="noopener noreferrer">DM Here</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Alex Johnes' required />
          <input type="email" name="email" placeholder='abc@gmail.com' required />
          <textarea name="message" rows="7" placeholder='Type your message....' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact