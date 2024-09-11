import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({ 
      offset: 100,
      duration: 500,
      easing: 'ease-in-out-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <div >
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer />
    </div>
  );
}

export default App;
