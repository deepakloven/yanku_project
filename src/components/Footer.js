import React from 'react';
import '../css/footer.css'


const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='footer_1'>
            <h2 id='heading1'>YANKU</h2>
            <p id='team'>Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.</p>
        </div>

        <div className='footer_2'>
        <h3 id='heading2'>Services</h3>
        <a  id='support_a'href=''>>works</a> <br/>
            <a  id='support_a'href=''>>strategies</a>  <br/> 
            <a  id='support_a'href=''>>Release</a>   <br/>
            <a  id='support_a'href=''>>Mission</a>  
        </div>

        <div className='footer_3'>
        <h3 id='heading2'>Supports</h3>
            <a  id='support_a'href=''>>Developer</a> <br/>
            <a  id='support_a'href=''>>Support</a>  <br/> 
            <a  id='support_a'href=''>>Customer</a>   <br/>
            <a  id='support_a'href=''>>Guide</a>  
      
      
</div>

      
    </div>
  )
}

export default Footer
