import React from 'react';
import { Row, Col, Progress, Card, Typography } from 'antd';

const { Title, Text } = Typography;

const personalData = [
    { label: "FullName", value: "Andriy Grigorov" },
    { label: "Birthday", value: "14.12.1988" },
    { label: "Phone Number", value: "+49015154781067" },
    { label: "Email", value: "andygrigs88@gmail.com" },
];

const skills = [
    { name: "HTML & CSS", percentage: 95, color: '#1890ff' },
    { name: "JavaScript/React", percentage: 90, color: '#52c41a' },
    { name: "Node.js", percentage: 80, color: '#722ed1' },
    { name: "Python", percentage: 65, color: '#faad14' },
    { name: "UI design", percentage: 63, color: '#f5222d' },
    { name: "Mongo DB", percentage: 70, color: '#13c2c2' },
];

const Skills: React.FC = () => {
    return (
        <>
            <Card 
              className="mb-8" 
              title={<Title level={3}>My Data and Contacts</Title>}
              data-aos="fade-up"
            >
                <Row gutter={[16, 16]}>
                    {personalData.map((data, index) => (
                        <Col key={index} xs={24} sm={12}>
                            <Text strong className="mr-2">{data.label}:</Text>
                            <Text>{data.value}</Text>
                        </Col>
                    ))}
                </Row>
            </Card>

            <Card 
              title={<Title level={3}>Skills</Title>}
              data-aos="fade-up"
              data-aos-delay="200"
            >
                <Row gutter={[16, 24]}>
                    {skills.map((skill, index) => (
                        <Col key={index} xs={24} sm={12}>
                            <Text strong className="block mb-2">{skill.name}</Text>
                            <Progress 
                                percent={skill.percentage} 
                                strokeColor={skill.color}
                                strokeWidth={12}
                            />
                        </Col>
                    ))}
                </Row>
            </Card>
        </>
    );
};

export default Skills;