import React from "react";
import "./SubNews.scss";
import CoronaContainer from "../../Container/CoronaContainer";
import WeatherContainer from "../../Container/WeatherContainer";

const SubNews = () => {
  return (
    <div className="sub-news-wrapper">
      <CoronaContainer />
      <WeatherContainer />
    </div>
  );
};

export default SubNews;
