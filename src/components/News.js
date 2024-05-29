import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/news.css';
import Footer from './Footer';

const News = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(4); // Limit the number of articles shown initially

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c7ad30435c994ec8b2f7ef9984405da9")
      .then((response) => {
        setData(response.data.articles);
        setVisibleData(response.data.articles.slice(0, limit));
      })
      .catch((error) => {
        console.error("API did not fetch", error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleViewAll = () => {
    setShowAll(true);
    setVisibleData(data);
  };
 
  return (
    <>
    <div className='main-line'><h1>News</h1></div>
    <div className='card_container'>
      {visibleData.map((value, index) => (
        <div className='card_main' key={index}>
          <img src={value.urlToImage} alt='news' style={{ width: '300px', height: '300px' }} />
          <h2>{value.title}</h2>
          <p>{value.description}</p>
          <a href={value.url}className='btn btn-more'>Read more</a>
        </div>
      ))}
    </div>
    {!showAll && <button className='btn btn-all' onClick={handleViewAll}>View all</button>}

<Footer/>
    </>
  );
}

export default News;



