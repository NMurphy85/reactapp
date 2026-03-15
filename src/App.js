import React, { useState } from "react";
import Nav from "./components/Nav";
import "./index.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./components/Books";

import {books} from './data'
import Bookinfo from "./Pages/Bookinfo";
import Cart from "./Pages/Cart";


function App() {
  const [cart, setCart] = useState([]);
function addToCart(book){
  console.log('add to cart', book)
}

  return (
    <Router>
      <div className="App">
      <Nav />
        <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/books" element={() => <Books books={books} />}/>
      <Route path='/books/:id' element= {<Bookinfo books={books} addToCart={addToCart} />} />
       <Route path="/cart" element={<Cart books={books} />}/>
        </Routes>
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
