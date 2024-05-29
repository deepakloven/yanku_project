// Main.js
import React from 'react';
import '../css/main.css';
import Footer from './Footer';

const Main = () => {
  return (
    <>
    <div className="idex_container">
      <div className="text_wrapper">
        <p><span className="highlight">C</span>reatin<span className="highlight">g</span></p>
        <p><span className="highlight">a</span> <span className="highlight">B</span>righte<span className="highlight">r</span></p>
        <p><span className="highlight">W</span>orl<span className="highlight">d</span></p>
        <p><span className="highlight">T</span>ogethe<span className="highlight">r</span></p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Main;
