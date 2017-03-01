import React from 'react';
import background from '../images/backgrounds/being.jpg';
import { SectionIntro } from '../components';

export default ({}) => (
  <div className="section" style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  }}>
  <SectionIntro
    order="04"
    title="Being There"
    copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
    buttonText="Explore"
    buttonAction={()=>{
      console.log("I'm exploring")
    }}
  />
  </div>
);
