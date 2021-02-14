import React from "react";
import News from "./News";
import "./Newswrap.scss";

const Newswrap = () => {
  return (
    <div className="news-wrapper">
      <section className="news-section">
        <News />
      </section>
    </div>
  );
};

export default Newswrap;
