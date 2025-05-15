import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8og69sn",
        "template_hkrv5dl",
        form.current,
        "p7TxsLapQc5uOGrQ1"
      )
      .then(
        (result) => {
          Swal.fire("Your message has been sent!", "Thanks!", "success");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h5>{t("get_in_touch")}</h5>
      <h2>{t("contact_me")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>{t("email")}</h4>
            <h6 className="email">diegoesteban.ders@gmail.com</h6>
            <a
              href="mailto:diegoesteban.ders@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {t("send_message")}
            </a>
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>diegooders</h5>
            <a
              href="https://www.instagram.com/diegooders/"
              target="_blank"
              rel="noreferrer"
            >
              {t("send_message")}
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+56 9 2099 5401</h5>
            <a
              href="https://wa.me/56920995401"
              target="_blank"
              rel="noreferrer"
            >
              {t("send_message")}
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("your_name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("send_message")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("your_message")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("send_message")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
