import React from "react";
import logo from "../icons/calculator-solid.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="col py-2 text-center">
          <img
            className="d-block mx-auto"
            src={logo}
            alt=""
            width="50"
            height="50"
          />
          <h3>Simple Calculator</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
