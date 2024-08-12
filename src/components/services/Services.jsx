import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="services">
      <h5>{t("services_subtitle")}</h5>
      <h2>{t("services_title")}</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{t("services_uiux_title")}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item1")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item2")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item3")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item4")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item5")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item6")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_uiux_item7")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("services_webdev_title")}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item1")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item2")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item3")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item4")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item5")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item6")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_webdev_item7")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("services_content_title")}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item1")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item2")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item3")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item4")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item5")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item6")}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{t("services_content_item7")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
