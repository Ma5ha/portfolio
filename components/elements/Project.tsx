"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPlus, BsArrowUpRightCircle } from "react-icons/bs";
import FsLightbox from "fslightbox-react";
import { projects } from "@/data/Projects";
import { motion } from "framer-motion";
import {  fadeInAnimationVariants } from "../lib/utils";

type PropsProject = {
  img: string;
  title: string;
  subtitle: string;
  num: number;
};
const Project = ({ img, title, subtitle, num }: PropsProject) => {
  const [lightboxController, setlightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightbox = (slide: number) => {
    setlightboxController({
      toggler: !lightboxController?.toggler,
      slide,
    });
  };

  const ImageItems = projects?.map((item) => {
    return item.img;
  });

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={num}
      className="col-xl-4 col-lg-6 col-md-6">
      <div className="project-item card card--light">
        <div className="project-item__image">
          <Image
            className="project-item__image__img"
            src={img}
            alt="project"
            width={500}
            height={500}/>

          <div className="project-item__image__btn">
            <div className="btn-view" onClick={() => openLightbox(num + 1)}>
              <BsPlus />
            </div>
          </div>
        </div>

        <div className="project-item__content">
          <div className="project-item__content__info">
            <h5 className="project-item__content__title">{title}</h5>
            <p className="project-item__content__subtitle">{subtitle}</p>
          </div>
          <Link className="btn-link" href={`/projects/${title}`}>
            <BsArrowUpRightCircle />
          </Link>
        </div>

        <div className="project-item__light">
          <FsLightbox
            toggler={lightboxController?.toggler}
            sources={ImageItems}
            slide={lightboxController?.slide}
            type="image"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
