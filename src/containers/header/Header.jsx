import React from 'react';

//importing css file
import './header.css';
import people from '../../assets/people.png'
import Face from '../../assets/Face.png'

const Header = () => {
  return (
    <div className='gpt3_header section__padding' id='home' >
      <div className='gpt3_header-content' >
        <h1 className='gradient_text' >Let’s Build amazing things with GPT-3 </h1>
        <p>however, any bed for indulgence while traveling is unpleasant. Not all thoughts involve blessing. Everything that brings us delight changes how loudly the attachment is agitated. Party we years to order permit requested.</p>
        <div className='gpt3_header-content_input' >
          <input type='email' placeholder='  Enter Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3_header-content_people' >
          <img src={people} alt="people" />
          <p>1000 people requested access a visit in last 24 hours</p>
        </div>
       
      </div>
      <div className='gpt3_header-image'>
          <img src={Face} alt="face" />
      </div>
     
    </div>
  )
}

export default Header