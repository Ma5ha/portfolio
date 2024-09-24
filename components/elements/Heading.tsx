"use client"
import React from "react";
import { motion } from "framer-motion";
import {fadeIn}from '../lib/utils'
type PropsHeading = {
  title: string;
  subtitle: string;
};

const Heading = ({ title, subtitle }: PropsHeading) => {
  return (
    <motion.div
      variants={fadeIn("up",0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true,amount:0.5}}
      className="row">
      <div className="col-12">
        <div className="heading">
          <div className="heading__shape"></div>
          <div className="heading__content">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Heading;
