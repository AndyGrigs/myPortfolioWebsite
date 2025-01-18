import React from 'react';
import { Card } from 'antd';

interface Project {
  title: string;
  imageUrl: string;
  link: string;
  description: string;
}

const projectsData: Project[] = [
  {
    title: "German Learning Platform",
    imageUrl: "/image.png",
    link: "https://lernst-du-deutsch.netlify.app",
    description: "App for learning German language for beginniners"
  }

];

const MyWorks: React.FC = () => {
  return (
    <section className="my-works" id="projects">
      <h2 className="my-works-title section-title project-tile">My work</h2>
      <p className="my-works-subtitle">A selection of my range works</p>

      <div className="portfolio">
        {projectsData.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
          <Card
            hoverable
            style={{ width: 240, height: 260, margin: 'auto', marginTop: 30 }}
            cover={<img alt={project.title} src={project.imageUrl} />}
          >
            <Card.Meta title={project.title} description={project.description} />
          </Card>
        </a>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;