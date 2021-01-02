import React from 'react';
import HeroSection from '../../HeroSection';
import About from '../About/About';
import Education from '../Education/Education';
import Hobbies from '../Hobbies/Hobbies';
import Work from '../Work/Work';
import Comment from '../Comment/Comment';
import Recommendation from '../Dummy/Recommendation';

const Home = () => {
  return(
    <>
      <HeroSection />
      <About />
      <Education />
      <Hobbies />
      <Work />
     {/*  <Comment /> */}
      <Recommendation />
    </>
  );
}

export default Home;