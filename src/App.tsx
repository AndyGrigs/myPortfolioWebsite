import React from 'react';
import { Layout } from 'antd';
import AppHeader from './ui/Header';
import AppFooter from './ui/Footer';
import About from './ui/About';
import Projects from './ui/MyWorks';
import WelcomeSection from './ui/WelcomeSection';

const { Content } = Layout;

const App = () => (
  <Layout>
    <AppHeader />
    <Content>
      <div style={{ padding: '24px', minHeight: 280 }}>
        <WelcomeSection/>
        <About />
        <Projects />
      </div>
    </Content>
    <AppFooter />
  </Layout>
);

export default App;
