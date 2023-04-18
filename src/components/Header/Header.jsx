import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import "../../main.css";
import { Link } from "react-scroll";
function Header() {
  const handleSubmit = (e) => {
    let element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <section className="def">
      <header className="max-w-7xl mx-auto ">
        <Link to="/">
          <img
            src="Polar-logo.svg"
            alt="Polar logo"
            width="79"
            height="79"
            className="header-img"
          />
        </Link>
        <div className="toggle">
        <button className="tul">
          <img src="oo.png" alt="" className="tul-img" />
        </button>
        <nav className="nav">
          <ul className="list">
            <li className="item">
              <Link to="" className="item-link">
                Home
              </Link>
            </li>
            <li className="item">
              <Link to="prodact" spy={true} smooth={true} offset={50} duration={500} className="item-link">
                Product
              </Link>
            </li>
            <li   className="item">
              <Link to="promo" spy={true} smooth={true} offset={50} duration={500} className="item-link">
                Pricing
              </Link>
            </li>
            <li
             to="desc" spy={true} smooth={true} offset={50} duration={500}  className="item">
              <Link to="" className="item-link">
                Testimonials
              </Link>
            </li>
            <li   className="item">
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="item-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleSubmit} className="header-btn">
          <img src="day-and-night.png" alt="" width="40" height="40" className="ltn" />
        </button>
        </div>
        <button className="tol">
          <img src="uu.png" alt=""  className="tol-img"/>
        </button>
        
      </header>
    </section>
  );
}
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }
export default Header;
