import React from "react";
import { SocialFollow } from "./SocialFollow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info footer-parts">
        <h3>FIND US</h3>

        <p>
          {" "}
          Park Allè, Aarhus C 8000 <br />
          +45 00 11 22 <br></br>
          <br />
          Mon-Th: 7am-4pm <br />
          Fri-Sat:9am-8pm{" "}
        </p>
      </div>
      <div className="footer-parts copy-right">
        <p>
          <FontAwesomeIcon icon={faCopyright} size="1x" /> ShareME Denmark
        </p>{" "}
        <p> 2022</p>
      </div>

      <div className="footer-parts">
        <SocialFollow />
      </div>
    </footer>
  );
}
