// Projects.tsx
import React from "react";

// Example project data
const projects = [
  {
    id: 1,
    name: "Blog App",
    description:
      "A full-featured blogging platform built with React and Node.js",
    imageUrl: "./projects/blogApp_react.png",
    projectUrl: "https://blogsapp.example.com",
  },
  {
    id: 2,
    name: "User Invitation System",
    description:
      "A system for sending and managing user invitations built with Express and MongoDB",
    imageUrl: "./projects/sending_invitation.png",
    projectUrl: "https://userinvite.example.com",
  },
  {
    id: 3,
    name: "Landing Page",
    description:
      "A modern, responsive landing page for a startup, built with HTML, CSS, and JavaScript",
    imageUrl: "./projects/landing.png",
    projectUrl: "https://landingpage.example.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
