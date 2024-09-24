import React from "react";
import Heading from "@/components/elements/Heading";
import { heading, projects, projectsSetting } from "@/data/Projects";
import Project from "@/components/elements/Project";
import Footer from "@/components/Footer";
import PaginationControls from "@/components/elements/PaginationControls";
import BackToPage from "@/components/elements/BackToPage";

type SearchParamsProps ={
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const page = ({ searchParams}: SearchParamsProps) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? projectsSetting?.nbPostPortfolioPage;
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const portfolioPaginates = projects?.slice(start, end);
  return (
      <main className="main">
        <section className="project section section--white" >
          <div className="container">
            <BackToPage PageName="home" />
            <Heading {...heading} />
            <div className="row project__items">
              {portfolioPaginates?.map((project, index) => {
                return <Project {...project} key={index} num={index} />;
              })}
            </div>
            <div className="row">
              <div className="col-12">
                <PaginationControls
                  length={projects?.length}
                  nbPosts={projectsSetting?.nbPostPortfolioPage}
                  hasNextPage={end < projects?.length}
                  hasPrevPage={start > 0}
                  pageName="projects"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
  );
};

export default page;
