import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

const Navbar = () => {

    
    return (
        <nav className="navbar">
            <img className = "logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" width="50" height="50"></img>
            <h3 className="title">FoodToGo</h3>
            <ul className="nav-links">
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/search" className="search">
                    <li>Search Items</li>
                </Link>
                <Link to="/login" className="login">
                    <li>Login</li>
                </Link>
                <Link to="/register" className="register">
                    <li>Sign up</li>
                </Link>
            </ul>

        </nav>

    );
};

export default Navbar;