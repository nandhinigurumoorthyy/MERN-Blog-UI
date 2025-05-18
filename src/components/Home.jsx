import React from 'react'
import NavBar from './NavBar'
import About from './About';
import Blogs from './Blogs';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Blogs />
      <Footer/>
    </div>
  )
}

export default Home;