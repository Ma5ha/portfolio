"use client"
import React from 'react'
import Image from 'next/image'
 import {motion} from 'framer-motion'
 import { fadeInAnimationVariants } from '../lib/utils'
type ServiceProps={
  img:string,
  title:string,
  desc:string,
  index:number
}
const Service = ({img,title,desc,index}:ServiceProps) => {

  return (
    <motion.div 
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    custom={index}
    className="col-xl-4 col-lg-6 col-md-6">
      <div className="service card card--white">
        <Image src={img} alt="" className="service__img"  width={250} height={250}/>
        <div className="service__content">
          <h5 className="service__content__title">{title}</h5>
          <p className="service__content__desc">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Service