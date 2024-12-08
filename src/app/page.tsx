import React from 'react'
// import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SecondSection from './components/SecondSection'
import TopSection from './components/TopSection';
import NewArrivl from './components/NewArrivl';
import Blog from './components/Blog';
import Insta from './components/Insta';
// import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <SecondSection/>
      <TopSection/>
      <NewArrivl/>
      <Blog/>
      <Insta/>
      {/* <Footer/> */}
      
    </div>
  )
}

export default Home


