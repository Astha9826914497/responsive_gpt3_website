import React from 'react';

//importing css file
import './gpt3.css'
import { Feature } from '../../components';

const GPT3 = () => {
  return (
    <div className='gpt3_whatgpt3 section__margin ' id="about">
      <div className='gpt3_whatgpt3-feature'>
        <Feature  title="About" text="A neural network machine learning model trained using internet data called GPT-3, or the third-generation Generative Pre-trained Transformer, can produce any kind of text. It was created by OpenAI, and it only needs a tiny quantity of text as an input to produce huge amounts of accurate and complex machine-generated text."/>
      </div>
      <div className='gpt3_whatgpt3-heading'>
        <h1 className='gradient_text'>The possibilities are inconceivable</h1>
        <p>Check The Library</p>
      </div>
      <div className='gpt3_whatgpt3-container'>
        <Feature title="Chatbots" text="A computer program known as a chatbot replicates human dialogue with a user. Though not all chatbots have artificial intelligence (AI), contemporary chatbots are increasingly using conversational AI methods like natural language processing (NLP) to comprehend user inquiries and generate automated responses." />
        <Feature title="Knowledge Base" text="A type of artificial intelligence (AI) known as knowledge-based systems is made to record the knowledge of human specialists to aid in decision-making. Because it depends on human expertise, an expert system is an illustration of a knowledge-based system." />        
        <Feature title="Education" text="Highly engaging interactions between students and AI models are made possible through Transforming Learning Experiences through AI Conversations. Students can ask questions, look for explanations, and get prompt feedback through interactive chats, creating a dynamic learning environment." />

      </div>
    </div>
  )
}

export default GPT3