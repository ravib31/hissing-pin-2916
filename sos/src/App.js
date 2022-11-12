import logo from './logo.svg';
import './App.css';
// import { Route,Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import second from './second';
// import IMAGES from './Components/Social-media/social';
// import Footer from './Components/Footer/footer';
// import JoinPage from './Pages/Join Page/JoinPage';
// import SignIn from "./Components/SignIn/SignIn"



function App() {
  return (
    <>
      <Navbar />
      
      <img src='asos.jpg' className='image'></img>
      <div className='rat'>
        {/* after the image start */}
        <ul>
          <li>
            <a>EASY WORLDWIDE DELIVERY</a>
            <h4>*minimum spend apply</h4>
          </li>
          <li>
            <a >ASOS DESIGN and 850+</a>
            <h3>brands</h3>
          </li>

        </ul>
      </div>

      <Footer/>
     

      
    </>
  );
}

export default App;
