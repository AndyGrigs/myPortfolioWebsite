import  { useState } from 'react';
import { Layout} from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, ProjectOutlined, TrophyOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', href: '#welcome-section' },
    { key: 'about', icon: <UserOutlined />, label: 'About', href: '#about' },
    { key: 'certifications', icon: <TrophyOutlined />, label: 'Certifications', href: '#certifications' },
    { key: 'projects', icon: <ProjectOutlined />, label: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setVisible(false);
  };

  return (
    <>
      <Header className="header fixed w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center h-full">
          <div className="text-xl font-bold">AG Portfolio</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav className="flex items-center justify-center gap-x-8">
              {menuItems.map(item => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-xl"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setVisible(true)}
          >
            <MenuOutlined style={{ fontSize: '24px' }} />
          </button>
        </div>
      </Header>

      {/* Mobile Drawer */}
      <aside
        className="fixed bg-white top-0 right-0 w-64 h-full border-l border-gray-300 z-50 md:hidden"
        style={{ display: visible ? 'block' : 'none' }}
      >
        <nav className="flex flex-col gap-y-4 p-4">
          {menuItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.href);
                setVisible(false);
              }}
              className="text-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};


export default AppHeader;