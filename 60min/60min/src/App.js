import React from 'react';
import Header from './components/Header/Header';
import './reset.css';
import Section from './components/Section';
import Footer from './components/Footer/Footer';
import './App.scss';

class App extends React.Component {
  state = { width: '' };

  updateWidth = () => {
    const width = window.innerWidth;
    if (width > 1200) this.setState({ width: 'pc' });
    else if (width > 640) this.setState({ width: 'tablet' });
    else this.setState({ width: 'mobile' });
  };

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }
  render() {
    return (
      <div className={`App ${this.state.width}`}>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
