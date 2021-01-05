import React from 'react';
import HeroSection from '../../HeroSection';
import About from '../About/About';
import Education from '../Education/Education';
import Hobbies from '../Hobbies/Hobbies';
import Work from '../Work/Work';
import CommentBox from '../CommentBox/CommentBox';

const Home = () => {
  return(
    <>
      <HeroSection />
      <About />
      <Education />
      <Hobbies />
      <Work />
      <CommentBox />
    </>
  );
}

export default Home;