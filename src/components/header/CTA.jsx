import React from "react";
import CV_en from "../../assets/Diego_Rivera_Sprohnle_CV_english.pdf";
import CV_es from "../../assets/Diego_Rivera_Sprohnle_CV.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t, i18n } = useTranslation();

  // Determina el CV a descargar según el idioma actual
  const cvFile = i18n.language === 'en' ? CV_en : CV_es;

  return (
    <div className="cta">
      <a href={cvFile} download className="btn">
        {t("download_cv")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("lets_talk")}
      </a>
    </div>
  );
};

export default CTA;
