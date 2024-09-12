import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Cadres from './components/Cadres';
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
      <Skills/>
      <hr className='w-2/3 m-auto my-2'/>
      <Cadres/>
      <hr className='w-2/3 m-auto my-2'/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
