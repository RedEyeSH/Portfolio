import React from 'react';
import "./Project.css";
import Reveal from 'react-reveal/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faUnity, faWordpress, faReact } from '@fortawesome/free-brands-svg-icons';

// Unity - (??.10.2022 - 5.12.2022)
// Wordpress - (??.(9 or 10).2023 - 30.11.2023)
// Currency Converter react native - (14.11.2023 - 12.12.2023)
// React native map 

const Project = () => {
  return (
    <section className="project" id="project">
      <span className="line">&nbsp;</span>
      <div className="project-header">
        <Reveal effect="project-fade-in-top">
          <h1>My Projects.</h1>
        </Reveal>
        <Reveal effect="project-pop">
          <p>Following projects showcase my skills and experience through real-world examples of my work.</p>
        </Reveal>
      </div>
      <div className="project-container">
        <div className="project-content">
          <Reveal effect="project-pop" duration={600}>
            <span className="project-icon">
              <FontAwesomeIcon className="project-unity-icon" icon={faUnity} />
            </span>
          </Reveal>
          <Reveal effect="project-fade-in-right" duration={600}> 
            <div className="project-box-one">
              <div className="project-box-header">
                <h1>Horror Maze</h1>
                <a href="https://github.com/RedEyeSH/my_game">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <ul>
                <li>Developing a game with Unity Editor using C# language</li>
                <li>Incorporated Unity Asset Store free packages to enhance project development</li>
                <li>Primary responsibilities included designing game concepts, writing code, optimizing performance, and testing the game</li>
                <li>Make users to experience an immersive and thrilling adventure</li>
              </ul>
              <span>October 2022 - December 2022</span>
            </div>
          </Reveal>
        </div>
        <div className="project-content">
          <Reveal effect="project-pop" duration={600}>
            <span className="project-icon">
              <FontAwesomeIcon className="project-wordpress-icon" icon={faWordpress} />
            </span>
          </Reveal>
          <Reveal effect="project-fade-in-left" duration={600}>
            <div className="project-box-two">
              <div className="project-box-header">
                <h1>Varia</h1>
                <a href="https://github.com/RedEyeSH/varia_theme">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <ul>
                <li>Developing a basic Varia website using PHP and CSS languages</li>
                <li>Provides a clean, minimalist layout focused on enhancing readability and ensuring user-friendly navigation</li>
                <li>My role was primarily responsible for coding the elements, ensuring their functionality and performance</li>
                <li>Allows users to seek information about Varia School</li>
              </ul>
              <span>October 2023 - November 2023</span>
            </div>
          </Reveal>
        </div>
        <div className="project-content">
          <Reveal effect="project-pop" duration={600}>
          <span className="project-icon">
            <FontAwesomeIcon className="project-react-icon" icon={faReact} />
          </span>
          </Reveal>
          <Reveal effect="project-fade-in-right" duration={600}>
            <div className="project-box-three">
              <div className="project-box-header">
                <h1>Currency Converter</h1>
                <a href="https://github.com/RedEyeSH/Currency_converter">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <ul>
                <li>Developing a basic Currency Converter application using React Native for smooth currency conversions</li>
                <li>I integrated an API to fetch real-time currency data and implemented the currency conversion functionality</li>
                <li>Primary responsibilities encompassed website design and API data retrieval to ensure dynamic content integration</li>
                <li>Allows users to convert currecies</li>
              </ul>
              <span>November 2023 - December 2023</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Project;
