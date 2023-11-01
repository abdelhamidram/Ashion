"use client";
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"
import Login from "./components/Login";
import Contact from "./components/Contact";
import Registration from "./components/Register";
import User from "./components/User";
import Newproduct from "./components/Newproduct";
import { BrowserRouter , Routes, Route,} from 'react-router-dom';


function Home() {
  return (
  <div className="App">
    {
      <BrowserRouter>
        <Navbar/>
        <main className="container m-auto">
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/contact"  element={<Contact/>} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/addproduct" element={<Newproduct/>} />
          </Routes>
        </main>
      </BrowserRouter>    
    }
  </div>
  );
}
 
export default Home;