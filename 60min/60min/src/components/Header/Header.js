import React from "react";
import "./Header.scss";

class Header extends React.Component {
  state = {
    news: null,
    contact: null,
  };

  scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  scrollToNews = () => {
    window.scrollTo({ top: this.state.news, behavior: "smooth" });
  };

  scrollToContact = () => {
    window.scrollTo({ top: this.state.contact, behavior: "smooth" });
  };

  handleResize = () => {
    let height = window.innerHeight > 550 ? window.innerHeight : 550;
    this.setState({ news: height, contact: height * 2 });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <div className="header-wrapper">
        <header>
          <div className="logo">
            <span onClick={this.scrollToHome}>TodayNews</span>
          </div>
          <div className="menu">
            <span className="home" onClick={this.scrollToHome}>
              HOME
            </span>
            <span className="news" onClick={this.scrollToNews}>
              NEWS
            </span>
            <span className="contact" onClick={this.scrollToContact}>
              CONTACT
            </span>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
