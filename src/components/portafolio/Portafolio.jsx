import React from "react";
import "./portafolio.css";
import Data from "./Data";

const Portafolio = () => {
  const data = Data();

  return (
    <section id="portafolio" className="portafolio">
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio__container">
        {data.map(({ id, image, title, github, github1, github2, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                {id === 2 ? (
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
                    Live Demo
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
