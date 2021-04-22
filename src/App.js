import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Hotel from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import FindHotel from './components/HotelInfo/FindHotel';


function App() {
  return (
    <div className="App" id="HeroArea">
        <Router>
         <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/home">
              <Home></Home>
           </Route>
          <Route path="/booking/:bookingKey">
            <Booking></Booking>
           </Route>
           <Route path="/find_hotel">
             <FindHotel></FindHotel>
           </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
         </Switch>
        </Router>
        
      
    </div>
  );
}

export default App;
