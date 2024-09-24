"use client";
import React from "react";
import { heading, services } from "@/data/Services";
import Heading from "./elements/Heading";
import Service from "./elements/Service";
import { useSectionInView } from "./lib/hooks/UseSectionInView";

const Services = () => {
  const { ref } = useSectionInView("Services");
  return (
    <section className="services section section--light" id="services" ref={ref} >
      <div className="container">
        <Heading {...heading} />
        <div className="row">
          {services?.map((service, index) => {
            return <Service {...service} key={index} index={index}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
