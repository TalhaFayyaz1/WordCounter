
import "./App.css";
import React  from 'react';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar title="TextUTills" aboutText="About" />
      <div className="container my-5">
      
      <TextForm heading = "Enter Text & Convert To UpperCase"/>
      <hr></hr>
      <About/>
      </div>
    </>
  );
}

export default App;
