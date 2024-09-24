"use client";
import React from "react";
import Image from "next/image";
import SocialMedia from "./elements/SocialMedia";
import { InfoData, bannerData } from "@/data/Hero";
import Button from "./elements/Button";
import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import { motion } from "framer-motion";
import {fadeIn}from './lib/utils'
const Hero = () => {
  const { theme, setTheme } = useTheme();
  const { ref } = useSectionInView("Home");

  return (
    <section className="hero vh-100" ref={ref}>
      <Image
        src={bannerData?.imageBg}
        alt=""
        fill
        priority
        className="hero__img"/>
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true}}
        className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__content vh-100 ">
              <div className="hero__social-media">
                <SocialMedia />
              </div>

              <div className="hero__banner">
                <div className="banner">
                  <h6 className="banner__subtitle">{bannerData?.subtitle}</h6>
                  <h1 className="banner__title ">
                    {bannerData?.title}
                    <Typewriter
                      options={{
                        strings: bannerData?.words,
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </h1>
                  <p className="banner__desc">{bannerData?.desc}</p>
                  <Button {...bannerData?.button} />
                </div>
              </div>
              <div className="hero__info">
                <div className="info">
                  {InfoData?.map((info, index) => {
                    return (
                      <div className="info__item" key={index}>
                        <p className="info__label mb-0">{info?.label}</p>
                        <p className="info__value mb-0">{info?.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
