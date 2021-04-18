import './App.css';
import Header from './components/Header/Header';
import { Router } from 'react-router';
import Home from './components/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App" id="HeroArea">
    
        <Header></Header>
        <Home></Home>
    </div>
  );
}

export default App;
