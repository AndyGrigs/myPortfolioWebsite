import React from 'react';
import { Card } from 'antd';
import Skills from './Skills';

const About = () => (
  <section id='about' style={{ padding: '20px', maxWidth: '80%', margin: '0 auto' }}>
    <article>
      <Card title="About Me" style={{ width: '100%', fontSize: '24px' }}>
        <p>
          Hello! 👋 I am a passionate software developer 🚀 with a keen interest in creating impactful web applications. With a solid foundation in JavaScript, Node.js, and Python, I thrive in environments where I can leverage my skills to solve complex problems and enhance user experiences 💻🛠️.
        </p>
        <p>
          My journey in technology began with a fascination for understanding how the digital world operates, leading me to dive deep into programming languages such as JavaScript, Node.js, and Python. Over time, I've honed my abilities to develop robust, scalable solutions that drive efficiency and innovation 🌐💡.
        </p>
        <p>
          Currently, I am seeking a challenging role as a developer where I can contribute my expertise in full-stack development, collaborate with talented teams, and continue to grow professionally. I am eager to bring my dedication to learning, problem-solving, and my commitment to excellence to a dynamic team that values creativity and technical prowess 🤝🔧.
        </p>
      </Card>
    </article>

    <article style={{ padding: '20px', maxWidth: '80%', margin: '0 auto' }}>
      <Skills />
    </article>


  </section>
);

export default About;