import React from 'react';

//importing css file
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3_cta'  >
      <div className="gpt3_cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Sign up now to begin discovering the limitless possibilities.</h3>
      </div>
      <div className="gpt3_cta-btn">
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA