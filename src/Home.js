import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
    <Navbar />
    <Cards />
    <Footer />
    </div>
  )
}

export default Home