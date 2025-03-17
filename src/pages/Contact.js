import React from 'react';
import './Contact.css';
import MailIcon from '../assets/icons/Mail.svg';
import LinkedInIcon from '../assets/icons/LinkedIn_Light.svg';
import GithubIcon from '../assets/icons/Github_Dark.svg';
import PhoneIcon from '../assets/icons/Phone.svg';


function Contact() {

  return (
    <section id="contact" className="contact">
      <div className='contact-container animate'>
        <div className='contact-title'>
          <h1>Contact Me_</h1>
        </div>
        <div className='contact-p'>
          <p>I'm always open to connecting - whether it's for questions, collaboration, or just exchanging ideas. Feel free to reach out, and let's build something great together.</p>
        </div>
        <div className="contact-buttons">
          <a href="mailto:idoshen1@gmail.com" className='contact-button'>
            <img className="button-icon" src={MailIcon} alt="Mail" />
          </a>
          <a href="tel:+972544998258" className='contact-button'>
            <img className="button-icon" src={PhoneIcon} alt="Phone" />
          </a>
          <a href="https://www.linkedin.com/in/idoshen/" className='contact-button' target="_blank" rel="noopener noreferrer">
            <img className="button-icon" src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/idoshen" className='contact-button' target="_blank" rel="noopener noreferrer">
            <img className="button-icon" src={GithubIcon} alt="Github" />
          </a>
        </div>
      </div>
      <div className='contact-rights animate'>
          <p className='contact-rights-text'>&copy; 2025 Ido Shenbach. All rights reserved.</p>
          {/* <p className='contact-rights-text'>Mark?</p> */}
      </div>
    </section>
  );
}

export default Contact;