import React from "react";

import "./buttom.styles.scss";

const Button = ({ children }) => (
  <div className="button-container">
    <div className="button">
      <button className="btn">
        {children}
      </button>
    </div>
  </div>
);

export default Button;
