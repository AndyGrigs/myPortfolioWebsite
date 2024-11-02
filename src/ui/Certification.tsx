// Import necessary components from Ant Design
import React from 'react';
import { Card, Image } from 'antd';

interface Certification {
  name: string;
  issuer: string;
  issuedDate: string;
  logoUrl?: string;
}

const certificationsData: Certification[] = [
  {
    name: "Certified Frontend Developer",
    issuer: "Scrimba",
    issuedDate: "18.03.2023",
    logoUrl: "/scrimba.png"
  },
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    issuedDate: "2022-10-22",
    logoUrl: "/fcc.png"
  },
  {
    name: "Fron End Development Libraries",
    issuer: "FreeCodeCamp",
    issuedDate: "2024-03-02",
    logoUrl: "/fcc2.png"
  },
  {
    name: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    issuedDate: "2024-09-24",
    logoUrl: "/fcc3.png"
  },
  {
    name: "Legasy JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    issuedDate: "2022-12-22",
    logoUrl: "/fcc4.png"
  },

];

const Certifications: React.FC = () => {
  return (
    <section className="certifications" id="certifications">
      <h2 className="certifications-title section-title">Certifications</h2>
      <p className="certifications-subtitle">Achievements and Recognitions</p>

      <div className="portfolio">
        {certificationsData.map((certification, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 240,  margin: 'auto', marginTop: 30 }}
            cover={certification.logoUrl ? <Image alt={certification.name} src={certification.logoUrl} /> : null}
          >
            <Card.Meta title={certification.name} description={`Issued by ${certification.issuer}`} />
            <p>Date Issued: {certification.issuedDate}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;