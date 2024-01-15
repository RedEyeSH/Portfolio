import React from 'react';
import './Work.css';
import CalevalaInteractive from './CalevalaInteractiveLogo.png'
import Reveal from 'react-reveal/Reveal';
import { Tilt } from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Work = () => {
  return (
    <section className="work">
        <span className="line">&nbsp;</span>
        <div className="work-header">
            <h1>Work Experience.</h1>
        </div>
        <div className="work-container">
            <div className="work-cards">
                <Reveal effect="work-fade-in-right">
                    <Tilt>
                        <div className="work-card">
                            <div className="work-card-image">
                                <div className="work-card-image-one">
                                    <img className="company-logo" src={CalevalaInteractive} />
                                    <a href="https://github.com/satvikvelpula/FitPack">
                                        <FontAwesomeIcon className="work-card-icon" icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                            <div className="work-card-content">
                                <h1>FitPack</h1>
                                <h4>Calevala Interactive</h4>
                                <p>A web-based platform that allows users to set a timer and create a to-do list. Implementing responsive web design. Collaborating with cross-functional teams including designers and product managers.</p>
                                <div className="work-card-language">
                                    <p className="work-card-language-one">#html</p>
                                    <p className="work-card-language-two">#css</p>
                                    <p className="work-card-language-three">#javascript</p>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </Reveal>
                {/* <Reveal effect="">
                    <Tilt>
                        <div className="work-card">
                            <div className="work-card-image">
                                <div className="work-card-image-two">
                                    <a href="https://github.com">
                                        <FontAwesomeIcon className="work-card-icon" icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                            <div className="work-card-content">
                                <h1>Coming Soon...</h1>
                                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                <div className="work-card-language">
                                    <p className="work-card-language-one">#lang1</p>
                                    <p className="work-card-language-two">#lang2</p>
                                    <p className="work-card-language-three">#lang3</p>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </Reveal> */}
            </div>
        </div>
    </section>
  )
}

export default Work;
