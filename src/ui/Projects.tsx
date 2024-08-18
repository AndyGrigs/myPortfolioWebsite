import React from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const projects = [
  {
    title: 'Project 1',
    description: 'A description of project 1.',
    imgSrc: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 2',
    description: 'A description of project 2.',
    imgSrc: 'https://via.placeholder.com/150'
  }
];

const Projects = () => (
  <div style={{ padding: '20px' }}>
    <Row gutter={16}>
      {projects.map((project, index) => (
        <Col span={8} key={index}>
          <Card
            hoverable
            cover={<img alt={project.title} src={project.imgSrc} />}
          >
            <Meta title={project.title} description={project.description} />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Projects;
