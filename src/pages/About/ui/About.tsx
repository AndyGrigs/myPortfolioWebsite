// About.tsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            Frontend Developer with a Passion for Teaching
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              My Journey
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-semibold">
              Hello! My name is Andriy. I am a teacher of English and German who
              has transitioned into a frontend developer role. Over the past
              three years, I have honed my skills in various programming
              languages and technologies, completing online courses and personal
              projects to deepen my understanding of programming concepts and
              best practices. My portfolio showcases my proficiency in Node.js,
              JavaScript (React), and HTML/CSS, as well as my ability to develop
              web applications and automate tasks. As a developer, I bring a
              unique perspective to programming, emphasizing clear
              communication, attention to detail, and a focus on user
              experience. I am currently seeking a position as a frontend
              developer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              My Biography
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-semibold">
              I was born on December 14th, 1988 in a small village near Kiev,
              Ukraine. After completing my primary education in my village, I
              attended a professional school to become a welder. Following that,
              I got married and decided to pursue my passion for languages. In
              2013, I enrolled in a 5-year university program to become a
              translator. After completing my studies, I worked as an English
              teacher in Ukraine. However, with the onset of the
              Ukrainian-Russian war, my family and I decided to move to Germany.
              Here, I am currently working as a German teacher for Ukrainian
              children, helping them to learn the language and adapt to their
              new surroundings. It is my hope that I can make a positive impact
              on their lives and help them to thrive in their new home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
