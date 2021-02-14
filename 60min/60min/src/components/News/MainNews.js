import React from 'react';
import './MainNews.scss';

const printNews = (items) => {
  return items.map((item, i) => {
    return (
      <div className="news-item-wrapper" key={i}>
        <p className="news-title">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </p>
        <p className="news-description">{item.description}</p>
      </div>
    );
  });
};

const MainNews = ({ newsData }) => {
  return (
    <article className="news-article">
      <p className="news-article-title">Today's News 20</p>
      {printNews(newsData)}
    </article>
  );
};

export default MainNews;
