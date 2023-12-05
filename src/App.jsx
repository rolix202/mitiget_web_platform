import React from 'react';
import SocialHeader from './components/socialHeader/SocialHeader';
import './App.css'
import NavMenu from './components/menuBar/NavMenu';
import Hero from './components/heroSection/Hero';

function App(){
  return (
    <main className='home'>
      <SocialHeader />
      <NavMenu />
      <Hero />
    </main>
  )
}

export default App; 