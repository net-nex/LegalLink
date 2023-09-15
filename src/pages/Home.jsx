import React from 'react';
import {Navbar,Footer, Categories, Cities, Hero, Lawyers, BottomCta} from '../components';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Lawyers/>
      <Categories/>
      <Cities/>
      <BottomCta/>
      <Footer/>
    </div>
  )
}

export default Home
