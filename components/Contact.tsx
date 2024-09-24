"use client";
import React from "react";
import Heading from "./elements/Heading";
import Form from "./elements/Form";
import { heading } from "@/data/Contact";
import { contactInfo } from "@/data/Contact";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import SocialMedia from "./elements/SocialMedia";
import {motion} from 'framer-motion'
import {fadeInAnimationVariants } from './lib/utils'
import { BsShareFill } from "react-icons/bs";
const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section ref={ref} className="contact section section--light" id="contact">
      <div className="container">
        <Heading {...heading} />
        <motion.div 
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          custom={1}
          className="row">
          <div className="col-xl-7"> <Form /></div>
          <div className="col-xl-5">
            <div className="contact__info card card--white">
              <h4 className="contact__info-title">{contactInfo?.title}</h4>
              <p className="contact__info-desc">{contactInfo?.desc}</p>
              <div className="contact__info-items">
                { contactInfo?.list?.map((item,index)=>{
                    return(
                      <div className="contact__info-item"  key={index}>
                          <span className='contact__info-item-icon'>{item?.icon}</span>
                          <span className="contact__info-item-value">{item?.value}</span>
                      </div>
                    )
                  })
                }
                <div className="contact__info-item ">
                <span className='contact__info-item-icon'><BsShareFill /></span>
                  <div className="contact__info-item-social-media">
                    <SocialMedia/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
