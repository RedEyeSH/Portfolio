// import React, { useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Project from "./components/Project/Project.js";
import Contact from './components/Contact/Contact.js';
import Work from "./components/Work/Work.js";
import Tech from './components/Tech/Tech.js';

const App = () => {
  
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.addEventListener('beforeunload', handleBeforeUnload);

  //   };
  // }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Tech />
      <Work />
      <Contact />
    </div>
  );
}

export default App;