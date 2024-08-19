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
    link: "https://dashboard.andygrigs.repl.co/",
    description: "App for learning German language for beginniners"
  },
  {
    title: "Blog App",
    imageUrl: "/blogApp_react.png",
    link: "https://blogsapp.andygrigs.repl.co/posts",
    description: "Simple app for getting and creating posts"
  },
 
  // {
  //   title: "Landing Page",
  //   imageUrl: "/landing.png",
  //   link: "https://landingpage.andygrigs.repl.co/",
  //   description: ""
  // },
  {
    title: "Car Selling Site",
    imageUrl: "/car_selling.png",
    link: "https://carsellingsite.andygrigs.repl.co/",
    description: "Side where the buyer can choose the appropriate car to buy"
  },
  {
    title: "Dashboard",
    imageUrl: "/dashboard.png",
    link: "https://dashboard.andygrigs.repl.co/",
    description: "Dashboard for seeing some progress or some data",
  },
  {
    title: "Sending User Invitation",
    imageUrl: "/sendind_invitation.png",
    link: "https://sendinguserinvitation1.andygrigs.repl.co/",
    description: ""
  },

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
            style={{ width: 240, margin: 'auto', marginTop: 30 }}
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