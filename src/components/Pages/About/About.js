import React from 'react';
import './About.css';

const About = () => {
  return(
      <>
      <div className="about-section" id="about">
        <div className="about-img">
            <img src="images/about-picture.jpg" alt="profile picture" class="prof-pic" />
        </div>
        <div className="about-description">
            <h2>About Myself</h2>
            <p>I am an architecture graduate with a <span><i>passion for design</i></span>. Combining my interest in programming and the passion for design paved my way towards a software development career.</p>
        </div>
      </div>
      </>
  );
}

export default About;