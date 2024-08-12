import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useTranslation } from 'react-i18next';
import './index.css'; 

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="language-switcher">
        <button 
          className={`btn-language ${i18n.language === 'en' ? 'active' : ''}`} 
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button 
          className={`btn-language ${i18n.language === 'es' ? 'active' : ''}`} 
          onClick={() => changeLanguage('es')}
        >
          Español
        </button>
      </div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
