import React from "react";
import "./portafolio.css";
// import IMG1 from '../../assets/portfolio1.jpg';
// import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.png';
// import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from "../../assets/emmart.png";
import IMG8 from "../../assets/tukimarket.png";
import IMG9 from "../../assets/apimovie.png";
import IMG10 from "../../assets/qrgenerator.png";
import IMG11 from "../../assets/calculator.png";
import IMG12 from "../../assets/webresponsive.png";
import IMG14 from "../../assets/id.png";
import IMG15 from "../../assets/port.png";
import IMG16 from "../../assets/instagram.png";
import IMG17 from "../../assets/monogram.png";
import IMG18 from "../../assets/minecraftClon.png";
import IMG19 from "../../assets/calculadoraIntellij.png";
import IMG20 from "../../assets/listadoPersonasIntellij.png";
import IMG21 from "../../assets/ventaPcIntellij.png";
import IMG22 from "../../assets/catalogoPeliculasIntellij.png";

const Portafolio = () => {
  const data = [
    {
      id: 1,
      image: IMG7,
      title: "Simple Ecommerce",
      github: "https://github.com/D3R5/emmart",
      demo: "https://emmart.vercel.app",
    },
    {
      id: 2,
      image: IMG8,
      title: "Marketplace",
      github1: "https://github.com/D3R5/Frontend-TukiMarket",
      github2: "https://github.com/D3R5/Backend-TukiMarket",
      demo: "https://tukimarket.netlify.app",
    },
    {
      id: 3,
      image: IMG15,
      title: "My Portfolio - React",
      github: "https://github.com/D3R5/My-portfolio",
      demo: "https://my-portfolio-orpin-kappa.vercel.app",
    },
    {
      id: 4,
      image: IMG16,
      title: "Instagram Clone - React/Redux/Firebase",
      github: "https://github.com/D3R5/instagram-clone-react",
      demo: "https://instagram-clone-ebon-gamma.vercel.app",
    },
    {
      id: 5,
      image: IMG17,
      title: "Monogram Console, first page (Clon)",
      github: "https://github.com/D3R5/monogramConsoleClon",
      demo: "https://monogram-console-clon.vercel.app",
    },
    {
      id: 6,
      image: IMG14,
      title: "Api Rest - NodeJs, Express, Typescript",
      github: "https://github.com/D3R5/Api-rest",
    },
    {
      id: 7,
      image: IMG9,
      title: "Movie-Api",
      github: "https://github.com/D3R5/Movie-Api",
    },
    {
      id: 8,
      image: IMG10,
      title: "QR-Generator",
      github: "https://github.com/D3R5/Qr-Generator",
    },
    {
      id: 9,
      image: IMG11,
      title: "CalculatorReactJS",
      github: "https://github.com/D3R5/CalculatorReactJs",
    },
    {
      id: 10,
      image: IMG12,
      title: "Simple Web Responsive",
      github: "https://github.com/D3R5/WebResponsive",
    },
    {
      id: 11,
      image: IMG18,
      title: "Minecraft Clon React/ThreeJs",
      github: "https://github.com/D3R5/minecraftClonJs",
    },
    {
      id: 12,
      image: IMG19,
      title: "Calculator Intellij Java",
      github: "https://github.com/D3R5/Intellij_Calculator",
    },
    {
      id: 13,
      image: IMG20,
      title: "People List Intellij Java",
      github: "https://github.com/D3R5/Intellij_PeopleList",
    },
    {
      id: 14,
      image: IMG21,
      title: "Computer Sale Intellij Java",
      github: "https://github.com/D3R5/Intellij_ComputersSale",
    },
    {
      id: 15,
      image: IMG22,
      title: "Movies Intellij Java",
      github: "https://github.com/D3R5/Intellij_Movies",
    },
  ];

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
