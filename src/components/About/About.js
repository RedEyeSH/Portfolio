import React from 'react';
import './About.css';
import Reveal from 'react-reveal/Reveal';
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about" id="about">
      <span className="line">&nbsp;</span>
      <div className="about-container">
        <div className="about-header">
          <Reveal effect="about-fade-top" duration={2000} >
            <h1>About Me.</h1>
          </Reveal>
          <Reveal effect="about-pop">
            <p>I'm a website developer with experience in Python, HTML, CSS, and JavaScript, utilizing technologies like React to infuse depth and dynamism into my projects. Adaptability is one of my strengths, allowing me to swiftly grasp new concepts and techniques.</p>
          </Reveal>
        </div>
        <div className="about-cards">
          <Reveal effect="about-fade-in-right" cascade duration={1750}>
            <Tilt className="about-tilt" >
              <div className="about-card">
                <div className="about-card-content">
                  <FontAwesomeIcon className="about-card-icon-one" icon={faLaptopCode} />
                  <h3>Web Developer</h3>
                </div>
              </div>
            </Tilt>
          </Reveal>
          <Reveal effect="about-fade-in-right" duration={1500}>
            <Tilt className="about-tilt">
              <motion.div className="about-card">
                <div className="about-card-content">
                  <FontAwesomeIcon className="about-card-icon-two" icon={faReact} />
                  <h3>React Developer</h3>
                </div>
              </motion.div>
            </Tilt>
          </Reveal>
          {/* <Reveal effect="about-fade-in-right" duration={1250}>
            <Tilt className="about-tilt">
              <div className="about-card">
                <div className="about-card-content">
                  <h3>Coming Soon...</h3>
                </div>
              </div>
            </Tilt>
          </Reveal>
          <Reveal effect="about-fade-in-right" duration={1000}>
            <Tilt className="about-tilt">
              <div className="about-card">
                <div className="about-card-content">
                  <h3>Coming Soon...</h3>
                </div>
              </div>
            </Tilt>
          </Reveal> */}
        </div>
      </div>
    </section>
  )
}

export default About;
