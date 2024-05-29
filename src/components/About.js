import React, { useState } from 'react';
import '../css/home.css'; 
import herImg from '../images/hero.png';
import Footer from './Footer';
import Explore from './Buttons_work/Explore';
const MainContainer = () => {
  const[showExplore,setShowExplore]=useState(false);

  const buttonClick=()=>{
    setShowExplore(true);
  } ;
  return (
    <>
    <div className="main_container">
      <div className="left_container">
        <div className='text1'><h2>We do the work you stay focused on your customers.</h2></div>
        <div className='text2'>Awwwsome. is a digital agency passionate about storytelling, visual design, and technology. We collaborate with companies small to large around the world to help them engage their audiences and build brand awareness. 
        Our team can
        create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.
        </div>
        <div className='buttons'>
        <button className='btn1' type='button' onClick={buttonClick}>Explore Projects</button>
        {showExplore && <Explore/>}
        <button className='btn2'type='submit' href=''>About us </button>
      </div>
      </div>
      <div className="right_container"> 
      <img src={herImg} className='img1'/>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default MainContainer;
