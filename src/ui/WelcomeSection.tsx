import React from 'react';
import { Image, Typography, Space } from 'antd';

const { Title, Text } = Typography;

const WelcomeSection: React.FC = () => {
  return (
    <section 
      id="welcome-section" 
      className="min-h-screen flex items-center justify-center py-20 px-4"
      data-aos="fade-up"
    >
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/me.jpg"
            alt="Profile Picture"
            className="rounded-full"
            width={200}
            preview={false}
            style={{ margin: '0 auto' }}
          />
        </div>
        
        <Space direction="vertical" size="large" className="w-full">
          <Title level={1} className="text-4xl md:text-6xl font-bold">
            Hi, I am Andriy Grygorov
          </Title>
          <Title 
            level={2} 
            className="text-xl md:text-3xl text-gray-600"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Web Developer
          </Title>
          <Text className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web experiences
          </Text>
        </Space>
      </div>
    </section>
  );
};

export default WelcomeSection;