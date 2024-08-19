import React from 'react';
import { Flex, Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => (
    <Header className="header">
        <div className="logo" />
        <Flex justify='flex-end'>
            <Menu theme='light' mode="horizontal">
                <Menu.Item key="home">
                    <a href="#home"><HomeOutlined /></a>
                    Home
                </Menu.Item>
                <Menu.Item key="about">
                    <a href="#about"><UserOutlined /></a>
                    About
                </Menu.Item>
                <Menu.Item key="projects">
                    <a href="#projects"><ProjectOutlined /></a>
                    Projects
                </Menu.Item>
            </Menu>
        </Flex>
    </Header >
);

export default AppHeader;
