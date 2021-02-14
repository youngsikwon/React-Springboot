import React from "react";
import "./Typing.scss";

class Typing extends React.Component {
  state = {
    height: null,
  };

  scrollArrow = () => {
    window.scrollTo({ top: this.state.height, behavior: "smooth" });
  };

  handleResize = () => {
    let height = window.innerHeight > 550 ? window.innerHeight : 550;
    this.setState({ height: height });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <section className="typing-wrapper">
        <div>
          <p>Get Today's NEWS</p>
        </div>
        <span className="icon" onClick={this.scrollArrow}>
          <i className="fas fa-chevron-down"></i>
        </span>
      </section>
    );
  }
}

export default Typing;
