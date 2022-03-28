import './App.css';
import Intro from './Components/Intro/Intro';
import Explore from './Components/Explore/Explore';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import {  useState } from 'react';

const App = () => {
  let [arrowClicked, setArrowClicked] = useState(0);
  return (
    <div className='container'>
      <Intro onArrowClicked={()=>setArrowClicked((prevState)=>++prevState)}/>
      <Explore arrowClicked={arrowClicked}/>
      <AboutUs />
      <Footer/>
    </div>
  );
}

export default App;