import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <div>
        <p className="app-name">SHARE ME</p>
      </div>

      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/meals"}>Meals</Link>
        <Link to={"/addmeal"}>Add meal</Link>
      </nav>
    </header>
  );
}
