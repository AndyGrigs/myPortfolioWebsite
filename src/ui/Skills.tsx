import React from 'react';
import { Row, Col, Progress, Card } from 'antd';

// Personal data
const personalData = [
    { label: "FullName", value: "Andriy Grigorov" },
    { label: "Birthday", value: "14.12.1988" },
    { label: "Phone Number", value: "+49015154781067" },
    { label: "Email", value: "andygrigs88@gmail.com" },
];

// Skills
const skills = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "JavaScript/React", percentage: 90 },
    { name: "Node.js", percentage: 80 },
    { name: "Python", percentage: 65 },
    { name: "UI design", percentage: 63 },
    { name: "Mongo DB", percentage: 70 },
];

const Skills: React.FC = () => {
    return (
        <>
            <Card className="about-skills" title="My data and contacts">
                <Row gutter={[16, 16]} >
                    {personalData.map((data, index) => (
                        <Col key={index} span={12}>
                            <p><strong>{data.label}:</strong>  {"  " + data.value}</p>
                        </Col>
                    ))}
                </Row>
            </Card>

            <Card title="My skills level" className="skills-row">
                <Row gutter={[16, 16]}  >
                    {skills.map((skill, index) => (
                        <Col key={index} span={12}>
                            <h3>{skill.name}</h3>
                            <Progress percent={skill.percentage} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </>
    );
};

export default Skills;