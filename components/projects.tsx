"use client";
import React from "react";
import Heading from "./elements/Heading";
import { heading, projects, projectsSetting } from "@/data/Projects";
import Project from "./elements/Project";
import Link from "next/link";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <section
      ref={ref}
      className="project section section--white"
      id="projects">
      <div className="container">
        <Heading {...heading} />
        <div className="row project__items">
          {projects?.slice(0, projectsSetting?.nbPostHomePage)
            .map((project, index) => {
              return <Project {...project} key={index} num={index} />;
            })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__readmore">
              For More Works Visit <Link href="/projects" className="section__readmore-link">{" "} Our Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
