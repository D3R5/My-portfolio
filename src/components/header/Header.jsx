import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/perfil.jpg";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <h5>{t("console_log")}</h5>
        <h1>Diego Rivera Spröhnle</h1>
        <h5 className="text light">{t("title_fullstack")}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          {t("scroll_down")}
        </a>
      </div>
    </header>
  );
};

export default Header;
