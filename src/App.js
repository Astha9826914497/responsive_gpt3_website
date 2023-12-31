import React from 'react';
import './App.css';

import { CTA, Brand, Navbar } from './components';
import { Footer, Blog, Possibility, Features, GPT3, Header } from './containers';

const App = () => {
  return (
    <div className='App' >
      <div  className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <GPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App