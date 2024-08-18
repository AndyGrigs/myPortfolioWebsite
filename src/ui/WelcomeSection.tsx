// File: src/ui/WelcomeSection.tsx

import React from 'react';
import { Image } from 'antd'; // Importing Image from antd for better accessibility

const WelcomeSection: React.FC = () => {
  return (
    <section className="home" id="welcome-section">
      <div className="home-img">
        
        <Image src="/me_.jpg" alt="Profile Picture" />
      </div>

      <div className="home-data">
        <h1>Hi, I am Andriy Grygorov</h1>
        <p>Web Developer</p>
      </div>
    </section>
  );
};

export default WelcomeSection;