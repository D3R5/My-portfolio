import React from "react";
import "./portafolio.css";
import Data from "./Data";
import { useTranslation } from "react-i18next";


const Portafolio = () => {
  const { t } = useTranslation();

  const data = Data();
  
  return (
    <section id="portafolio" className="portafolio">
      <h5>{t("my_recent_work")}</h5>
      <h2>{t("portfolio_title")}</h2>
      <div className="container portafolio__container">
        {data.map(({ id, image, title, github, github1, github2, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                {id === 4 ? (
                  <div>
                    <a
                      href={github1}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Frontend
                    </a>
                    <a
                      href={github2}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Backend
                    </a>
                  </div>
                ) : (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("live_demo")}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
