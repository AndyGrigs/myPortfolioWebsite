// Certification.tsx
import React, { useState } from "react";
import { Modal } from "../../../components/Modal"; // Assuming Modal.tsx is in the same directory

const certifications = [
  {
    id: 1,
    title: "The Frontend Developer Career Path",
    issuer: "Scrimba",
    url: "./certificates/scrimba.pdf",
    description:
      "A comprehensive certification covering all aspects of frontend development.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/fcc1ddcc5bb-6b25-4c44-acd9-47fa8bdeb049/responsive-web-design",
    description: "Demonstrates proficiency in crafting responsive web designs.",
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/fcc1ddcc5bb-6b25-4c44-acd9-47fa8bdeb049/javascript-algorithms-and-data-structures",
    description:
      "Validates the ability to solve problems using JavaScript and understanding of data structures.",
  },
  // Add more certifications as needed
];

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="certification" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl font-semibold">{certification.title}</h3>
                <p className="text-gray-600">{certification.issuer}</p>
              </div>
              <button
                onClick={() => openModal(certification.url)}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} content={modalContent} onClose={closeModal} />
    </section>
  );
};

export default Certification;
