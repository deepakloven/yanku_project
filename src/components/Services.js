import React from 'react'
import '../css/services.css'
import img1 from '../images/icon-web-app.svg';
import img2 from '../images/icon-seo.svg';
import img3 from '../images/icon-game.svg';
import img4 from '../images/icon-ai.svg';




const Services = () => {
  return (
    <div className='service_cont'>
       {/* <div id='text_one'><h2>what we do</h2></div> */}
        <div className='web_app'>
        <img src={img1} className='img1_ser'/>
        <h2>Web Appliacation</h2>
        <p>platform independant business solution for maximum availability</p>
        </div>        
        <div className='seo'><img src={img2} className='img2'/>
        <h2>SEO</h2>
        <p>Let the world find top of others </p>
        </div>
        <div className='game'><img src={img3} className='img3'/>
        <h2>Game Development</h2>
        <p>Interactive games with perfect graphics</p>
        </div>
        <div className='robotics'><img src={img4} className='img4'/>
        <h2>Iot/ AI/ Robotics</h2>
        <p>Advance autonomous technology make life simple</p>
         </div>



    </div>
  )
}

export default Services

