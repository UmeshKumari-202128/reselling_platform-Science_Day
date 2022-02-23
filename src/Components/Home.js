import React from "react";

import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          
          <Link to="/">Home</Link>
        </li>
        <li>
          
          <Link to="/Footer">Footer</Link>
        </li>
        <li>
          
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Home;