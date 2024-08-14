import About from './Components/about';
import Nav from './Components/navigation';
import Display from './Components/displayproject';
import Contact from './Components/contact';
import Footer from './Components/footer';
import React from 'react';
import Hero from './Components/hero';
import './App.css';

function App() {
  return (
   <>
      <Nav />
      <Hero />
      <About />
      <Display />
      <Contact />
      <Footer />
  </>
  
  );
}

export default App;
