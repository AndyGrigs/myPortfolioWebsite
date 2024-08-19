import React from 'react';
import { Card } from 'antd';

interface Project {
  title: string;
  imageUrl: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: "German Learning Platform",
    imageUrl: "/image.png",
    link: "https://dashboard.andygrigs.repl.co/"
  },
  {
    title: "Blog App",
    imageUrl: "/blogApp_react.png",
    link: "https://blogsapp.andygrigs.repl.co/posts"
  },
  {
    title: "Sending User Invitation",
    imageUrl: "/sendind_invitation.png",
    link: "https://sendinguserinvitation1.andygrigs.repl.co/"
  },
  {
    title: "Landing Page",
    imageUrl: "/landing.png",
    link: "https://landingpage.andygrigs.repl.co/"
  },
  {
    title: "Car Selling Site",
    imageUrl: "/car_selling.png",
    link: "https://carsellingsite.andygrigs.repl.co/"
  },
  {
    title: "Dashboard",
    imageUrl: "/dashboard.png",
    link: "https://dashboard.andygrigs.repl.co/"
  }

];

const MyWorks: React.FC = () => {
  return (
    <section className="my-works" id="projects">
      <h2 className="my-works-title section-title project-tile">My work</h2>
      <p className="my-works-subtitle">A selection of my range works</p>

      <div className="portfolio">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 240, margin: 'auto', marginTop: 30 }}
            cover={<img alt={project.title} src={project.imageUrl} />}
          >
            <Card.Meta title={project.title} description={project.link} />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;