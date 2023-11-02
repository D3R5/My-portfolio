import React from "react";
import "./footer.css";
import { FiInstagram, FiTwitter, FiTwitch, FiYoutube } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        DERS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/diegooders/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Diegooders" target="_blank">
          <FiTwitter />
        </a>
        <a href="https://www.twitch.tv/diegooders" target="_blank">
          <FiTwitch />
        </a>
        <a
          href="https://www.youtube.com/channel/UC1c6eGpqAl-NSn6INA1VKeg"
          target="_blank"
        >
          <CiYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; DERS. website inspired by{" "}
          <a href="https://www.youtube.com/watch?v=G-Cr00UYokU&t=1883s">
            EGATOR:
            <FiYoutube />
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
