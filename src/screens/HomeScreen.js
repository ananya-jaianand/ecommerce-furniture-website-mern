import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './HomeScreen.css';

const data = [
  {
   image: require('./images/c1.jpg'), 
  },
  {
    image:require('./images/c2.jpg'), 
   },
   {
    image:require('./images/c3.jpg'), 
   } 
]

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider"
        />
      </Carousel.Item>
        )
      })}
      
    </Carousel>

    <br/>
        <br/>
      <h3 class="text-center">Shop Your Favorite</h3>
      <div class="container">
        <div className="signup-content" class="row d-flex justify-content-center align-items-center">
       
        <div class="form d-flex justify-content-center">
          <div class="column">
            <Link to="/dining"><div class="bg-image hover-zoom"><img src={require("./images/i1.png")} alt="img1"/></div></Link>
          </div>
          <div class="column">
            <Link to="/livingroom"><img  src={require("./images/i2.png")} alt="img2"/></Link>
          </div>
          <div class="column">
            <Link to="/bedroom"><img  src={require("./images/i3.png")} alt="img3"/></Link>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          
      </div>

   

    </div>
  );
}
export default HomeScreen;

