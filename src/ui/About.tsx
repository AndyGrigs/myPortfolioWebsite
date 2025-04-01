import React from 'react';
import { Card, Typography } from 'antd';
import Skills from './Skills';

const { Title, Paragraph } = Typography;

const About = () => (
  <section id="about" className="py-20 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto" data-aos="fade-up">
      <Title level={2} className="text-center mb-12">About Me</Title>
      
      <Card className="shadow-lg">
        <Paragraph className="text-lg mb-6">
          Hello! 👋 I am a passionate software developer 🚀 with a keen interest in creating impactful web applications. With a solid foundation in JavaScript, Node.js, and Python, I thrive in environments where I can leverage my skills to solve complex problems and enhance user experiences 💻🛠️.
        </Paragraph>
        
        <Paragraph className="text-lg mb-6">
          My journey in technology began with a fascination for understanding how the digital world operates, leading me to dive deep into programming languages such as JavaScript, Node.js, and Python. Over time, I've honed my abilities to develop robust, scalable solutions that drive efficiency and innovation 🌐💡.
        </Paragraph>
        
        <Paragraph className="text-lg">
          Currently, I am seeking a challenging role as a developer where I can contribute my expertise in full-stack development, collaborate with talented teams, and continue to grow professionally. I am eager to bring my dedication to learning, problem-solving, and my commitment to excellence to a dynamic team that values creativity and technical prowess 🤝🔧.
        </Paragraph>
      </Card>

      <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
        <Skills />
      </div>
    </div>
  </section>
);

export default About