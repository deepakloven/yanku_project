import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Navbar/>
  <Routes>
    <Route path='/main' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    {/* <Route path='/services' element={<Services/>}/> */}
    {/* <Route path='/news' element={<News/>}/>
    <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
    <Services/>
    <Blog/>
    {/* <App/> */}
    <Footer/>
    </Router>
    
);

reportWebVitals();
