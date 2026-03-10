import React from "react";
import Nav from "./components/Nav";
import "./index.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./components/Books";

import {books} from './data'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
       <Route path="/home" exact element={<Home />} />
       <Route path="/books"  element={<Books books={books} />}/>

        </Routes>
        <Nav />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
