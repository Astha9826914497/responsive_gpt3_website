import React from 'react';

//importing css file
import './possibility.css'
import possibility  from '../../assets/Possibility1.png';

const Possibility = () => {
  return (
    <div className='gpt3_possibility section__padding' id="caseStudies">
      <div className='gpt3_possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>To begin, make a request for early access</h4>
        <h1 className='gradient_text'>The possibilities are inconceivable</h1>
        <p>however, it is underappealing to bed any for travel assistance indulgence. Not all thoughts practice blessing indulgence, which is why everything is joyful and lively in the attachment. party we requested permission from years ago</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility