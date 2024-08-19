// Import necessary components from Ant Design
import React from 'react';
import { Card } from 'antd';

interface Certification {
  name: string;
  issuer: string;
  issuedDate: string;
  logoUrl?: string;
}

const certificationsData: Certification[] = [
  {
    name: "Certified React Developer",
    issuer: "React Foundation",
    issuedDate: "2023-04-01",
    logoUrl: "/react_logo.png"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issuedDate: "2023-06-15",
    logoUrl: "/aws_logo.png"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issuedDate: "2023-06-15",
    logoUrl: "/aws_logo.png"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issuedDate: "2023-06-15",
    logoUrl: "/aws_logo.png"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issuedDate: "2023-06-15",
    logoUrl: "/aws_logo.png"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issuedDate: "2023-06-15",
    logoUrl: "/aws_logo.png"
  },
  // Add more certifications as needed
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
            style={{ width: 240, margin: 'auto', marginTop: 30 }}
            cover={certification.logoUrl ? <img alt={certification.name} src={certification.logoUrl} /> : null}
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