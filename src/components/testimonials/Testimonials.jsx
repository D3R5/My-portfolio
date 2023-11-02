import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/user.png";
import AVTR2 from "../../assets/education.png";
import AVTR3 from "../../assets/hobbies.png";
import AVTR4 from "../../assets/skills.png";

// IMPORT SWIPER CORE AND REQUIRE MODULES
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "More About Me",
      review:
        "My name is Diego and I characterize myself as a creative, curious and technology enthusiast person. I am currently 26 years old and I live in San Fernando, Chile. I am excited to contemplate the future that we can build through programming, and how we can steer it in a direction that promotes harmony among people, thus improving their quality of life and opening new horizons in innovation. Swipe to the sides to find out more about me!",
    },
    {
      avatar: AVTR2,
      name: "Education",
      review:
        "Throughout my studies, I have dabbled in two areas related to technology: Mechatronic Civil Engineering and Electrical Civil Engineering at the University of Talca in Chile, although I have not completed them yet. Both academically and professionally, I have always moved in this field, and also, my family also works in the area of technology. Therefore, I can say that I have grown immersed in this world. Now I have finished the SoyHenry bootcamp and I have obtained other certifications such as IBM in cognitive class, so now I dedicate myself full time to developing web applications.",
    },
    {
      avatar: AVTR3,
      name: "Hobbies",
      review:
        "I have several hobbies, maybe too many haha. At the age of 13 I learned to play the guitar and over the years I have managed to put together a small studio at home and learn to play more instruments. Music is my passion and I really enjoy interpreting and composing musical themes, since it gives me great peace of mind. Currently I upload to Instagram some fragments of my playing guitar. Also, I am passionate about sports. Throughout my life I have practiced some sport and I really enjoy physical exercise. I have ventured into disciplines such as karate, gym, skateboarding, basketball, calisthenics, surfing, mountain biking and trekking. I love the excitement and adrenaline rush I get from challenging myself in every activity.Video games are also one of my great passions. I enjoy the challenges they bring me and the opportunity to immerse myself in different virtual worlds. In addition, reading plays a fundamental role in my life. Books offer me an escape from reality and I constantly expand my library to immerse myself in new stories and gain new knowledge.Of course, food also occupies a special place in my interests. I love exploring and trying new flavors, discovering different types of cuisine, and enjoying culinary experiences.And finally, I cant stop mentioning my pets. I have three female dogs named Hummer, Misha and Clio. They are my faithful companions and my inexhaustible source of love and mischief. I cant imagine my life without them, they are my little love beasts.",
    },
    {
      avatar: AVTR4,
      name: "Extra Skills",
      review: "•Photoshop •Lightroom •Figma •Reaper •Movavi Video Suit",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h5>Extra</h5>
      <h2>More about me</h2>

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
