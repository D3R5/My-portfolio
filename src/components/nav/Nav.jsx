import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);
  const [showTooltip4, setShowTooltip4] = useState(false);
  const [showTooltip5, setShowTooltip5] = useState(false);
  const [showTooltip6, setShowTooltip6] = useState(false);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={activeNav === "#" ? "active" : ""}
        title="Home"
      >
        <AiOutlineHome />
        {showTooltip && <span className="tooltip">Home</span>}
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        onMouseEnter={() => setShowTooltip2(true)}
        onMouseLeave={() => setShowTooltip2(false)}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
      >
        <AiOutlineUser />
        {showTooltip2 && <span className="tooltip2">About</span>}
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        onMouseEnter={() => setShowTooltip3(true)}
        onMouseLeave={() => setShowTooltip3(false)}
        className={activeNav === "#experience" ? "active" : ""}
        title="Experience"
      >
        <BiBook />
        {showTooltip3 && <span className="tooltip3">Experience</span>}
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        onMouseEnter={() => setShowTooltip4(true)}
        onMouseLeave={() => setShowTooltip4(false)}
        className={activeNav === "#services" ? "active" : ""}
        title="Services"
      >
        <RiServiceLine />
        {showTooltip4 && <span className="tooltip4">Services</span>}
      </a>

      <a
        href="#portafolio"
        onClick={() => setActiveNav("#portafolio")}
        onMouseEnter={() => setShowTooltip5(true)}
        onMouseLeave={() => setShowTooltip5(false)}
        className={activeNav === "#portafolio" ? "active" : ""}
        title="Portfolio"
      >
        <HiOutlineDocumentDuplicate />
        {showTooltip5 && <span className="tooltip5">Portfolio</span>}
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        onMouseEnter={() => setShowTooltip6(true)}
        onMouseLeave={() => setShowTooltip6(false)}
        className={activeNav === "#contact" ? "active" : ""}
        title="Contact"
      >
        <BiMessageSquareDetail />
        {showTooltip6 && <span className="tooltip6">Contact</span>}
      </a>
    </nav>
  );
};

export default Nav;
