"use client"
import React from 'react'
import Heading from './elements/Heading'
import TestimonialItem from './elements/TestimonialItem';
import { heading,testimonials } from '@/data/Testimonials'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {motion} from 'framer-motion'
import {fadeInAnimationVariants } from './lib/utils'
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  return (
    
    <section className="testimonials section section--white" id="clients">
      <div className="container">
       <Heading {...heading} />
        <motion.div 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={1}
        className="row" >
          <div className="col-lg-12">
              {
                <Swiper
                modules={[ Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                  // when window width is <= 768px
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  // when window width is <= 991px
                  991: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  // when window width is <= 1200px
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}>
                  {
                  testimonials?.map((testimonial,index)=>{
                    return(
                      <SwiperSlide className="swiper-slide" key={index}>
                        <TestimonialItem {...testimonial} key={index}/>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
              }
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials