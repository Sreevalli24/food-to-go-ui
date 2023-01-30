import React , { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router , Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Itemspage from "./components/Itemspage";
import SearchItemsPage from "./components/SearchItemsPage"; 

const App = () => {
    return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/search" element = {<SearchItemsPage/>} />
        <Route exact path = "/Itemspage/:id" element = {<Itemspage />} />
      </Routes>
    </Router>
    )
}

export default App;
