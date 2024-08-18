import React from 'react';
import { Flex, Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => (
    <Header className="header">
        <div className="logo" />
        <Flex justify='flex-end'>
            <Menu theme='dark' mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
                <Menu.Item key="about" icon={<UserOutlined />}>About</Menu.Item>
                <Menu.Item key="projects" icon={<ProjectOutlined />}>Projects</Menu.Item>
            </Menu>
        </Flex>
    </Header>
);

export default AppHeader;
