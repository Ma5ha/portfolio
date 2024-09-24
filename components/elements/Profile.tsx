import React from 'react'
import Image from 'next/image'
import Button from "./Button";
import {motion} from 'framer-motion'
 import { fadeInAnimationVariants } from '../lib/utils'

type ProfileProps={
  image:string,
  title: string;
  bio: string;
  list: {
    label: string;
    value: string;
  }[];
  button: {
    text: string;
    href: string;
    icon: React.ReactNode;
  };
}
const Profile = ({image,title, bio, list, button}:ProfileProps) => {
  return (

    <motion.div className="row"
        variants={fadeInAnimationVariants}
       initial="initial"
       whileInView="animate"
       viewport={{once:true}}
       custom={1}>
        <div className="col-xl-5 mb-24 ">
          <div className="profile card card--img ">
            <Image 
              src={image} 
              alt="" 
              className="profile__img"  
              width={1000}
              height={1000}/>
          </div> 
        </div>

        <div className="col-xl-7 ">
          <div className="details card card--light">
            <h3 className="details__title">{title}</h3>
            <p className="details__desc">{bio}</p>
            <ul className="details__list ">
              {list?.map((item, index) => {
                return (
                  <li key={index} className="details__list-item">
                    <span className="details__list-label">{item?.label}</span> {item?.value}
                  </li>
                );
              })}
            </ul>
            <div className="details__btn">
              <Button {...button} download={true}/>
            </div>
          </div>
        </div>
    </motion.div>
   
  )
}

export default Profile