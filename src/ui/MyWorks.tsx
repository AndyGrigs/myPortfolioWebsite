import React from 'react';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

interface Project {
  title: string;
  imageUrl: string;
  link: string;
  description: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    title: "Chockolade Landing Page",
    imageUrl: "/image.png",
    link: "https://andygrigs.github.io/chocko-landing-page/",
    description: "A somple landing page for a chocolate company",
    tags: ["React", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Web Studio Portfolio Site",
    imageUrl: "/image.png",
    link: "https://andygrigs.github.io/goit-markup-hw-06/",
    description: "A portfolio site for a web studio",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "German Learning Platform",
    imageUrl: "/image.png",
    link: "https://lernst-du-deutsch.netlify.app",
    description: "App for learning German language for beginniners",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Blog App",
    imageUrl: "/blogApp_react.png",
    link: "https://peppy-puppy-cea4ed.netlify.app/",
    description: "Simple app for getting and creating posts",
    tags: ["React", "Redux", "Firebase"]
  }
];

const MyWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-center mb-12">My Projects</Title>
        <Paragraph className="text-center text-lg mb-12">
          A selection of my recent works and projects
        </Paragraph>

        <Row gutter={[24, 24]}>
          {projectsData.map((project, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 100}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    hoverable
                    cover={<img alt={project.title} src={project.imageUrl} />}
                    className="h-full"
                  >
                    <Card.Meta 
                      title={project.title} 
                      description={project.description}
                    />
                    <div className="mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default MyWorks;