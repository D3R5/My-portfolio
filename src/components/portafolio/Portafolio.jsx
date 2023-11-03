import React from "react";
import "./portafolio.css";
import images from "./Images";

const Portafolio = () => {
  const data = [
    {
      id: 1,
      image: images.img7,
      title: "Simple Ecommerce",
      github: "https://github.com/D3R5/emmart",
      demo: "https://emmart.vercel.app",
    },
    {
      id: 2,
      image: images.img8,
      title: "Marketplace",
      github1: "https://github.com/D3R5/Frontend-TukiMarket",
      github2: "https://github.com/D3R5/Backend-TukiMarket",
      demo: "https://tukimarket.netlify.app",
    },
    {
      id: 3,
      image: images.img9,
      title: "My Portfolio - React",
      github: "https://github.com/D3R5/My-portfolio",
      demo: "https://my-portfolio-orpin-kappa.vercel.app",
    },
    {
      id: 4,
      image: images.img10,
      title: "Instagram Clone - React/Redux/Firebase",
      github: "https://github.com/D3R5/instagram-clone-react",
      demo: "https://instagram-clone-ebon-gamma.vercel.app",
    },
    {
      id: 5,
      image: images.img11,
      title: "Monogram Console, first page (Clon)",
      github: "https://github.com/D3R5/monogramConsoleClon",
      demo: "https://monogram-console-clon.vercel.app",
    },
    {
      id: 6,
      image: images.img12,
      title: "Api Rest - NodeJs, Express, Typescript",
      github: "https://github.com/D3R5/Api-rest",
    },
    {
      id: 7,
      image: images.img14,
      title: "Movie-Api",
      github: "https://github.com/D3R5/Movie-Api",
    },
    {
      id: 8,
      image: images.img15,
      title: "QR-Generator",
      github: "https://github.com/D3R5/Qr-Generator",
    },
    {
      id: 9,
      image: images.img16,
      title: "CalculatorReactJS",
      github: "https://github.com/D3R5/CalculatorReactJs",
    },
    {
      id: 10,
      image: images.img17,
      title: "Simple Web Responsive",
      github: "https://github.com/D3R5/WebResponsive",
    },
    {
      id: 11,
      image: images.img18,
      title: "Minecraft Clon React/ThreeJs",
      github: "https://github.com/D3R5/minecraftClonJs",
    },
    {
      id: 12,
      image: images.img19,
      title: "Calculator Intellij Java",
      github: "https://github.com/D3R5/Intellij_Calculator",
    },
    {
      id: 13,
      image: images.img20,
      title: "People List Intellij Java",
      github: "https://github.com/D3R5/Intellij_PeopleList",
    },
    {
      id: 14,
      image: images.img21,
      title: "Computer Sale Intellij Java",
      github: "https://github.com/D3R5/Intellij_ComputersSale",
    },
    {
      id: 15,
      image: images.img22,
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
