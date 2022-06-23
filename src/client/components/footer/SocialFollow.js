import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.css";

export function SocialFollow() {
  return (
    <div className="social-container">
      <h3> Follow Us</h3>
      <nav>
        <a
          href="https://www.youtube.com/channel/UCgWEvuTAyg7qbWcq0M8w4EQ"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/hackyourfuturecopenhagen/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://twitter.com/HackyourfutureC"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/hackyourfuture.dk/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </nav>
    </div>
  );
}
