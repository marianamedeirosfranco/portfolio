import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from "emailjs-com"

function Contact() {

  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_7y6ddvm', 'template_mmjthig', form.current, 's1T2NBIYTgdyl6L0Z')

      e.target.reset()
    };

  return (
    <section id="contact">
    <h5>Get in Touch</h5>
    <h2>&darr; My Contacts &darr;</h2>

    <div className='container contact__container'>
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>marianamedeirosfranco
        @gmail.com</h5>
        <a href="mailto:marianamedeirosfranco" target='_blank'>Send a message</a>
      </article>
      <article className="contact__option">
        <AiOutlineLinkedin className='contact__option-icon' />
        <h4>Linkedin</h4>
        <h5>in/marianamedeirosfranco</h5>
        <a href="https://www.linkedin.com/in/marianamedeirosfranco" target='_blank'>Access my profile</a>
      </article>
      <article className="contact__option">
        <FaWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+351 963874635</h5>
        <a href="https://api.whatsapp.com/send?phone=+351963874635" target='_blank'>Send a message</a>
      </article>
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name="message" rows="7" rows="10" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>

    </div>
    </section>
  )
}

export default Contact