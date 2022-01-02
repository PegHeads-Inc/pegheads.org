import React from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu/menu";
import logo from "../../assets/images/PegHeadsLogo.png";

import "./header.scss";

const Header = () => (
  <nav className="header-container">
    <Link to="/" alt="pegheads.org">
      <img src={logo} alt="pegheadslogo" className="logo" />
    </Link>

    <div className="links center links-remove">
      <Link to="/lessons/" className="icon text" alt='lessons'>
        Lessons
      </Link>

      <a className="icon text" href="https://www.paypal.com/donate?hosted_button_id=HLGUZZLVMLUYY" rel="noopener noreferrer" target="_blank" alt="Donate">
        Donate
      </a>

      <a href="https://pegheadsorg.creator-spring.com/" rel="noopener noreferrer" target="_blank" className="icon text" alt='shop'>
        Shop
      </a>
    </div>
    <div className="menu-header">
      <Menu />
    </div>
  </nav>
);

export default Header;
