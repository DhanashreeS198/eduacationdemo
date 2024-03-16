import React from 'react';
import Home from './home';
import Nav from './nav';
import Brand from './brand' 
import Coustmer from './coustmer' 
import AboutUs from './aboutus'
import Footer from '@/Components/Footer'

const Index = () => {
  return (
    <>
      <Nav />
      <Home />
      <AboutUs/>
      <Coustmer/>
      <Brand/>
      <Footer/>
    </>
  );
};

export default Index;
