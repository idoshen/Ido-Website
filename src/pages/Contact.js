import React from 'react';
import './Contact.css';
import '../assets/styles/AnimatedButton.css'
import MailIcon from '../assets/icons/Mail.svg';
import LinkedInIcon from '../assets/icons/LinkedIn_Light.svg';
import GithubIcon from '../assets/icons/Github_Light.svg';
import PhoneIcon from '../assets/icons/Phone.svg';


function Contact() {

  return (
    <section id="contact" className="contact">
      <div className='contact-container animate'>
        <div className='contact-title'>
          <h2>Contact Me</h2>
        </div>
        <div className='contact-p'>
          <p>Feel free to reach out if you have any questions, collaboration ideas, or just want to say hello!</p>
        </div>
        <div className="contact-buttons">
          <a href="mailto:idoshen1@gmail.com" className='contact-button animated-button'>
            <span>Mail</span>
            <img src={MailIcon} alt="Mail" />
          </a>
          <a href="tel:+972544998258" className='contact-button animated-button'>
            <span>Phone</span>
            <img src={PhoneIcon} alt="Phone" />
          </a>
          <a href="https://www.linkedin.com/in/idoshen/" className='contact-button animated-button'>
            <span>LinkedIn</span>
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/idoshen" className='contact-button animated-button'>
            <span>Github</span>
            <img src={GithubIcon} alt="Github" />
          </a>
        </div>
      </div>
      <div className='contact-rights animate'>
          <p className='contact-rights-text'>&copy; 2025 Ido Shenbach. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Contact;
