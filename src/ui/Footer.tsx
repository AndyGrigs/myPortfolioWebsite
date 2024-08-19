import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {

  const currentYear = new Date().getFullYear();

  return (
  <Footer style={{ textAlign: 'center' }}>
    My Portfolio ©{currentYear} Created by Me
  </Footer>
);
}
export default AppFooter;
