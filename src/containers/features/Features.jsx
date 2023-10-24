import React from 'react'

//importing css file
import './features.css'
import { Feature } from '../../components'


const featuresData = [
  {
    title: 'reducing end mistrust right away',
    text: 'He provided of wealthy john from them good john. As they grow older and attract more women, mistrust may arise quickly in the home.'
  },

  {
    title: 'turn into the favored active',
    text: 'thought to be sympathetic but insufficient help on an infrequent basis. He became actively enabled to write a letter.'
  },

  {
    title: 'No message or goal at all',
    text: 'prompted question potential mistress relationship elegance eat in addition to arguing. Through communication or am nothing at all, primarily address'
  },

  {
    title: 'true boy law nation',
    text: 'She cant even reach her sister in that boy law country. feeds you back; its only six. In a quick blush, the leave law is now constructed in the built table among the six.'
    
  },

]
const Features = () => {
  return (
    <div className='gpt3_features section__padding' id="openai">
      <div className='gpt3_features-heading'>
        <h1 className='gradient_text'>All you have to do is acknowledge that the future has arrived. Go into the future now and bring it to pass.</h1>
        <p>To begin, make a request for early access</p>
      </div>
      <div className='gpt3_features-container'>
        
       {featuresData.map((item,index)=>(
        <Feature title={item.title} text={item.text} key={item.title + index} />
       ))}

      </div>
    </div>
  )
}

export default Features