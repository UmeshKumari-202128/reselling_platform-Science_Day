import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import About from "./Components/About";


import "./App.css";

function App() {
  return (<>
<About/>
<ContactUs/>
<Footer/>

    </>
  );
}         

export default App;
