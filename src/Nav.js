import React, { useState, useEffect } from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (

    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <div className="nav__main">
          <Link to="/home">
            <img
              className="nav__logo"
              src="Open_Museum_Logo_Dark.svg"
              alt="Open Museum Logo"
            />
          </Link>
        </div>
        <div className="nav__options">

          <Link to="/museums">
            <div className="nav__optionMuseums">
              <p>Museums</p>
            </div>
          </Link>

          <Link to="/collections">
            <div className="nav__optionCollections">
              <p>Collections</p>
            </div>
          </Link>

          <Link to="/artists">
            <div className="nav__optionArtists">
              <p>Artists</p>
            </div>
          </Link>

          <Link to="/search">
            <div className="nav__optionSearch">
              <i className="fas fa-search"></i>
              <p>Search</p>
            </div>
          </Link>

        </div>
      </div>
    </div>


  )
}

export default Nav;
