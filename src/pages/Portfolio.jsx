
// src/pages/Portfolio.jsx
import { useState } from 'react';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Challenges from './Challenges';
import CoreFullStack from './CoreFullStack';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('frontend');

  const handleTabChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="portfolio content" id="portfolio">
      <div className="container">
        <h2>My Projects</h2>
        <div className="portfolio-tabs">
          <button onClick={() => handleTabChange('frontend')}>FrontEnd</button>
          <button onClick={() => handleTabChange('backend')}>BackEnd</button>
          <button onClick={() => handleTabChange('challenges')}>Challenges</button>
          <button onClick={() => handleTabChange('core')}>Core FullStack</button>
        </div>

        <div className="portfolio-content">
          {activeSection === 'frontend' && <FrontEnd />}
          {activeSection === 'backend' && <BackEnd />}
          {activeSection === 'challenges' && <Challenges />}
          {activeSection === 'core' && <CoreFullStack />}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
