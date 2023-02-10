import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


const testimonialData = [
  {
    avatar: AVTR1,
    name: "Edil Soto",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae consequatur quis ex omnis sed sequi laudantium facere? Repellendus illo et dolore, odio soluta nostrum perferendis repudiandae culpa accusantium perspiciatis facilis eos voluptate natus mollitia accusamus alias sit. Quaerat, totam?"
  },
  {
    avatar: AVTR2,
    name: "Kristhian Paulino",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae consequatur quis ex omnis sed sequi laudantium facere? Repellendus illo et dolore, odio soluta nostrum perferendis repudiandae culpa accusantium perspiciatis facilis eos voluptate natus mollitia accusamus alias sit. Quaerat, totam?"
  },
  {
    avatar: AVTR3,
    name: "Janiel Rosario",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae consequatur quis ex omnis sed sequi laudantium facere? Repellendus illo et dolore, odio soluta nostrum perferendis repudiandae culpa accusantium perspiciatis facilis eos voluptate natus mollitia accusamus alias sit. Quaerat, totam?"
  },
  {
    avatar: AVTR4,
    name: "George Mota",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae consequatur quis ex omnis sed sequi laudantium facere? Repellendus illo et dolore, odio soluta nostrum perferendis repudiandae culpa accusantium perspiciatis facilis eos voluptate natus mollitia accusamus alias sit. Quaerat, totam?"
  },

]

const Testimonials = () => {
  return <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper
      pagination={{ clickable: true }} slidesPerView={1} spaceBetween={40} modules={[Pagination]} className="container testimonials__container mySwiper">

      {
        testimonialData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>)
        })
      }

    </Swiper>

  </section>
};

export default Testimonials;

