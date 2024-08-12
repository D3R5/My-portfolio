import React from "react";
import "./footer.css";
import { FiInstagram, FiTwitter, FiTwitch, FiYoutube } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { SlSocialSpotify } from "react-icons/sl";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="" className="footer__logo">
        DERS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">{t("home")}</a>
        </li>
        <li>
          <a href="#about">{t("about")}</a>
        </li>
        <li>
          <a href="#experience">{t("experience")}</a>
        </li>
        <li>
          <a href="#services">{t("services")}</a>
        </li>
        <li>
          <a href="#portafolio">{t("portfolio")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
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
        <a
          href="https://open.spotify.com/user/0pzqhq96shga6ykicylf5pn4m?si=cdc152e639f94bf6"
          target="_blank"
        >
          <SlSocialSpotify  />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; DERS. {t("frame")}{" "}
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
