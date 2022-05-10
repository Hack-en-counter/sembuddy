import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="bgimg">
    <div className="home">
    <Navbar />
    <Cards />
    <Footer />
    </div>
    </div>
  );
}

export default Home