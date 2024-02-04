import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/perfil.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>console.log('Hello World!!🌎🖖'); //I'm:</h5>
        <h1>Diego Rivera Spröhnle</h1>
        <h5 className="text light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
