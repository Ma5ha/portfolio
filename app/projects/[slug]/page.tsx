"use client";
import React from "react";
import Footer from "@/components/Footer";
import Heading from "@/components/elements/Heading";
import { useParams } from "next/navigation";
import { projects } from "@/data/Projects";
import Image from "next/image";
import BackToPage from "@/components/elements/BackToPage";
import { motion } from "framer-motion";
import {fadeIn} from "@/components/lib/utils";
import Loading from "@/app/loading";

const Page = () => {
  const params = useParams();
  const decodedSlug = decodeURIComponent(params?.slug as string);
  const project = projects?.find((item) => {
    return item?.title === decodedSlug;
  });
  return (
    <>
      <Loading />
      <main className="main">
        <section className="project-single section">
          <div className="container">
            <BackToPage PageName="projects" />
            <Heading
              title={project?.title || ""}
              subtitle={project?.subtitle || ""}
            />
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="project-single__image ">
                  <Image
                    className="project-single__image-img"
                    src={project?.img || ""}
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="project-single__content">
                  <div className="card card--light">
                    <h4 className="project-single__content-title"> {project?.title}</h4>
                    <p className="project-single__content-desc">{project?.desc}</p>
                  </div>
                  <div className="card card--light">
                    <h4 className="project-single__details-title"> More Details</h4>
                    <ul className="project-single__details-list">
                      {project?.details?.map((item, index) => {
                        return (
                          <li className="project-single__details-item"key={index}>
                            <span className="project-single__details-label"> {item?.label}</span>
                            <span className="project-single__details-value"> {item?.value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Page;
