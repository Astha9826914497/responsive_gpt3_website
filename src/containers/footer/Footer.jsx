import React from 'react';

//importing css file
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='gpt3_footer section__padding'>
      <div className="gpt3_footer-heading">
      <h1>Do you wish to go before others in the future?</h1>
      </div>
      <div className="gpt3_footer-btn">
        <p>Request Early Access</p>
      </div>
     
     <div className="gpt3_footer-links">
      <div className="gpt3_footer-links_logo">
        <img src={logo} alt="logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3_footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
        <p>Counters</p>
      </div>
      <div className="gpt3_footer-links_div">
        <h4>Company</h4>
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p>Contact</p>
      </div>
      <div className="gpt3_footer-links_div">
        <h4>Do Contact</h4>
        <p>Vijay Nagar, Indore</p>
        <p>+91 8763374829</p>
        <p>contactme.com</p>
      </div>
     </div>
     <div className="gpt3_footer-copyright">
      <p>@ 2023 OpenAI. All rights reserved.</p>
     </div>
    </div>
  )
}

export default Footer