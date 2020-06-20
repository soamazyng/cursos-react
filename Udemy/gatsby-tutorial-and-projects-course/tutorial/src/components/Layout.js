import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
