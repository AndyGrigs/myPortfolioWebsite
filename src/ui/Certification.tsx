import React from 'react';
import { Card, Image, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

interface Certification {
  name: string;
  issuer: string;
  issuedDate: string;
  logoUrl?: string;
  description?: string;
}

const certificationsData: Certification[] = [
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    issuedDate: "2022-10-22",
    logoUrl: "/fcc.png",
    description: "Comprehensive certification in modern responsive web design techniques"
  },
  {
    name: "Front End Development Libraries",
    issuer: "FreeCodeCamp",
    issuedDate: "2024-03-02",
    logoUrl: "/fcc2.png",
    description: "Mastery of popular front-end libraries and frameworks"
  },
  {
    name: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    issuedDate: "2024-09-24",
    logoUrl: "/fcc3.png",
    description: "Advanced Python programming and scientific computing concepts"
  },
  {
    name: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    issuedDate: "2022-12-22",
    logoUrl: "/fcc4.png",
    description: "Core JavaScript concepts and problem-solving skills"
  },
  {
    name: "Certified Frontend Developer",
    issuer: "Scrimba",
    issuedDate: "18.03.2023",
    logoUrl: "/scrimba.png",
    description: "Comprehensive front-end development certification"
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="py-20 px-4" id="certifications">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-center mb-4">Certifications</Title>
        <Text className="text-center block mb-12 text-lg">
          Professional Achievements and Recognitions
        </Text>

        <Row gutter={[24, 24]}>
          {certificationsData.map((certification, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 100}>
                <Card
                  hoverable
                  className="h-full"
                  cover={
                    certification.logoUrl && (
                      <div className="p-4 bg-gray-50">
                        <Image
                          alt={certification.name}
                          src={certification.logoUrl}
                          preview={false}
                          className="object-contain h-48"
                        />
                      </div>
                    )
                  }
                >
                  <Card.Meta
                    title={certification.name}
                    description={
                      <div>
                        <Text type="secondary" className="block mb-2">
                          Issued by {certification.issuer}
                        </Text>
                        <Text type="secondary" className="block mb-2">
                          {certification.issuedDate}
                        </Text>
                        {certification.description && (
                          <Text className="block">{certification.description}</Text>
                        )}
                      </div>
                    }
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Certifications;