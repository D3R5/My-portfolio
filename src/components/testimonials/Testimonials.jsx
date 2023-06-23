import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// IMPORT SWIPER CORE AND REQUIRE MODULES
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// IMPORT SWIPER STYLES
import 'swiper/css'
import 'swiper/css/pagination'


const Testimonials = () => {

    const data = [
        {
            avatar: AVTR1,
            name: 'Name 1',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fugit quidem explicabo natus magni placeat sunt veniam omnis. Deleniti nam velit fugiat! Repellat dolorem deleniti quidem delectus rerum? Placeat, quia.'
        },
        {
            avatar: AVTR2,
            name: 'Name 2',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fugit quidem explicabo natus magni placeat sunt veniam omnis. Deleniti nam velit fugiat! Repellat dolorem deleniti quidem delectus rerum? Placeat, quia.'
        },
        {
            avatar: AVTR3,
            name: 'Name 3',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fugit quidem explicabo natus magni placeat sunt veniam omnis. Deleniti nam velit fugiat! Repellat dolorem deleniti quidem delectus rerum? Placeat, quia.'
        },
        {
            avatar: AVTR4,
            name: 'Name 4',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fugit quidem explicabo natus magni placeat sunt veniam omnis. Deleniti nam velit fugiat! Repellat dolorem deleniti quidem delectus rerum? Placeat, quia.'
        }
    ]


    return (
        <section id='testimonials' className='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}}
                >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials