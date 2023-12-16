import React, { useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Reveal from 'react-reveal/Reveal';

const Home = () => {
    useEffect(() => {
        const disableRightClick = (e) => {
          e.preventDefault();
        };
    
        const imageElement = document.getElementById('image');
        if (imageElement) {
          imageElement.addEventListener('contextmenu', disableRightClick);
        }
    
        return () => {
          if (imageElement) {
            imageElement.removeEventListener('contextmenu', disableRightClick);
          }
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-container">
                <div className="home-header">
                    <Reveal effect="home-fade-in-bottom" duration={1500} delay={100}>
                        <h1>Hi, I'm <span className="name">Quang</span></h1>
                    </Reveal>
                    <Reveal effect="home-fade-in-bottom" duration={2500} delay={10}>
                        <h3>A Software Developer</h3>
                    </Reveal>
                    <Reveal effect="home-fade-in-bottom" duration={3500} delay={1}>
                        <p>As a developer, I refine website creation skills, crafting and fine-tuning digital experiences to create functional and engaging websites.</p>
                    </Reveal>
                </div>
                <motion.div 
                    className="home-box" 
                    drag 
                    dragConstraints={{ 
                        top: 25 ? 0 : 0, 
                        right: 25 ? 0 : 0, 
                        bottom: 25 ? 0 : 0, 
                        left: 25 ? 0 : 0 
                    }}
                    whileHover={{ scale: 1.05 }} 
                >
                    <div className="home-image" id="image"></div>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;