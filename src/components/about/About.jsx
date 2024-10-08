import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
 
//IMAGES
import ME from "../../assets/yo1.jfif";
import ME3 from "../../assets/yo3.png";
import ME4 from "../../assets/yo4.png";
import ME6 from "../../assets/yo6.png";
import ME7 from "../../assets/yo7.png";
import ME8 from "../../assets/yo8.png";
import ME9 from "../../assets/yo9.png";
import ME10 from "../../assets/yo10.png";
import ME11 from "../../assets/yo11.png";
import ME12 from "../../assets/yo12.jpg";
import ME14 from "../../assets/yo14.png";

// IMPORT SWIPER CORE AND REQUIRE MODULES
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const { t } = useTranslation();

  const data = [
    { foto: ME },
    { foto: ME3 },
    { foto: ME4 },
    { foto: ME6 },
    { foto: ME7 },
    { foto: ME8 },
    { foto: ME9 },
    { foto: ME10 },
    { foto: ME11 },
    { foto: ME12 },
    { foto: ME14 },
  ];

  return (
    <section id="about" className="about">
      <h5>{t("get_to_know")}</h5>
      <h2>{t("about_me")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="about__me-swiper"
          >
            {data.map(({ foto }, index) => {
              return (
                <SwiperSlide key={index} className="about__swiper">
                  <div className="about__me-image">
                    <img src={foto} alt="Images of me" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("experience")}</h5>
              <a>{t("years_of_work")}</a>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t("contact")}</h5>
              <a href="#contact">{t("go_to_contact")}</a>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <a href="#portafolio">{t("go_to_portfolio")}</a>
            </article>
          </div>
          <p>{t("description")}</p>
          <a href="#contact" className="btn btn-primary">
            {t("lets_talk")}
          </a>
          &nbsp;
          <a
            href="https://certificates.soyhenry.com/new-cert?id=f9fcaa0343034f7c1a09d407dc188a673c333505a1012ea51c8ecc7742ae2a1e"
            target="_blank"
            className="btn btn-primary"
            rel="noreferrer"
          >
            {t("SoyHenry_certificate")}
          </a>
          &nbsp;
          <a
            href="https://www.efset.org/cert/6PsRkC"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            {t("EF_SET_certificate")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
