import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}

export default App;
