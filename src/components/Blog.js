import { BottomNavigation } from '@mui/material';
import '../css/blog.css';
import axios from 'axios';
import React, { useState } from 'react';

const Blog = () => {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c7ad30435c994ec8b2f7ef9984405da9")
      .then((response) => {
        console.log(response.data.articles);
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching the news:', error);
      });
  };

  return (
    <>
      <div className='blog_container'>
        <button className='btn btn-primary' onClick={getNews}>Click for News</button>
      </div>
      <div className='card-grid'>
        {
          data.map((value, index) => (
            <div className='flip-card' key={index}>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={value.urlToImage} alt="news" style={{ width: '300px', height: '300px' }} />
                </div>
                <div className='flip-card-back'>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                  <button>view all</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Blog;
