import { useEffect } from 'react';
import { Layout } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppHeader from './ui/Header';
import AppFooter from './ui/Footer';
import About from './ui/About';
import Projects from './ui/MyWorks';
import WelcomeSection from './ui/WelcomeSection';
import Certifications from './ui/Certification';

const { Content } = Layout;

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Layout>
      <AppHeader />
      <Content>
        <div className="min-h-screen bg-gray-50">
          <div data-aos="fade-up">
            <WelcomeSection />
          </div>
          <div data-aos="fade-up">
            <About />
          </div>
          <div data-aos="fade-up">
            <Certifications />
          </div>
          <div data-aos="fade-up">
            <Projects />
          </div>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;