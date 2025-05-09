import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Listing from '../Components/Listing'
import About from '../Components/About'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Listing></Listing>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default Home