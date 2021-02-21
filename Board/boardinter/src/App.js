import logo from './logo.svg';
import './App.css';
import ListPage from './page/ListPage';
import WritePage from './page/ListPage';

function App() {
  //상태 값을 가지고 있음.
  return (
    <div>
      <ListPage />
      <WritePage />
    </div>
  );
}

export default App;
