import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="home">
   <div className='home'  style={{backgroundImage: `url(https://raw.githubusercontent.com/fdnakn/reactRestaurantWebsite/master/src/assets/banner.jpg)`}}>
      <div className='headerContainer'>
        <h1>Burger 33</h1>
        <p>Delicious Hamburgers <br/> with 33 Spicy Mix</p>
        <Link to="/menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  </div>;
};

export default Home;
