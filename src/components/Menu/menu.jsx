import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

function menu() {
  var nav = document.querySelector("#nav");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
}

const Menu = () => (
  <div>
    <nav id="nav" className="nav">
      <div></div>
      <div className="menu" onClick={menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-links">
        <Link to="/lessons/" alt="lessons">
          Lessons
        </Link>
        <Link to="/about/" alt="lessons">
          About
        </Link>
        <a href="https://pegheadsorg.creator-spring.com" alt="shop">
          Shop
        </a>

        <a href="https://www.paypal.com/donate?hosted_button_id=HLGUZZLVMLUYY" alt="Donate">
          Donate
        </a>
      </div>
    </nav>
  </div>
);

export default Menu;
