import React, { useState } from "react";
import { Link } from "@reach/router";
import BurgerMenu from "./BurgerMenu";

const Header = (props) => {
  const [isOpen, toggle] = useState(false);
  return (
    <header className="main">
      <div className="title">
        <h1 onClick={() => (props.navigate ? props.navigate("/") : "")}>
          Gestures of Love
        </h1>
        <BurgerMenu isOpen={isOpen} toggle={toggle} />
      </div>
      <div className={`menu ${isOpen ? "show" : "hide"}`}>
        <ul>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
