import React from 'react';
import './Tech.css';
import BallCanvas from '../canvas/Ball.js';
import { technologies } from '../../constant/index.js';

const Tech = () => {
  return (
    <section className="tech">
      <span className="line">&nbsp;</span>
      <div className="tech-container">
        {technologies.map((technology) => (
          <div className="tech-ball" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tech;
