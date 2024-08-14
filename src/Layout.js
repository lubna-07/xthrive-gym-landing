import React from 'react';
import Footer from './components/common/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

const SimpleLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export { MainLayout, SimpleLayout };
