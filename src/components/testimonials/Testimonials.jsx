import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/user.png";
import AVTR2 from "../../assets/education.png";
import AVTR3 from "../../assets/hobbies.png";
import AVTR4 from "../../assets/skills.png";
import { useTranslation } from 'react-i18next';

// IMPORT SWIPER CORE AND REQUIRE MODULES
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const { t } = useTranslation();

  const data = [
    {
      avatar: AVTR1,
      name: t('more_about_me_name'),
      review: t('more_about_me_review')
    },
    {
      avatar: AVTR2,
      name: t('education_name'),
      review: t('education_review')
    },
    {
      avatar: AVTR3,
      name: t('hobbies_name'),
      review: t('hobbies_review')
    },
    {
      avatar: AVTR4,
      name: t('extra_skills_name'),
      review: t('extra_skills_review')
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h5>{t('extra')}</h5>
      <h2>{t('more_about_me')}</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
