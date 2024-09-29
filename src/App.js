import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';
import Possibility from './Possibility';
import Features from './Features';
import WhatGPT3 from './Whatgpt3';
import Brand from './Brand';
import CTA from './CTA';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return( 
  <div className="App">
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    
  </div> 
 )
  }

export default App;