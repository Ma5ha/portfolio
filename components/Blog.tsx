"use client";
import React from "react";
import Heading from "./elements/Heading";
import { heading, blogSetting } from "@/data/Blog";
import { posts } from "@/.velite";
import { sortPosts } from "./lib/utils";
import Link from "next/link";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import Article from "./elements/Article";

const Blog = () => {
  const { ref } = useSectionInView("blog");
  const POSTS_PER_PAGE = blogSetting.nbPostHomePage;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts.slice(0,POSTS_PER_PAGE)
    
  return (
    <section
      ref={ref}
      className="project section section--light"
      id="blog">
        
      <div className="container">
          <Heading {...heading} />
          <div className="row">
            {displayPosts?.length > 0 ? (
                  displayPosts.map((post,index) => { 
                    return (
                      <div className=" col-lg-4 col-md-6" key={index}>
                        <Article post={post}/>
                      </div>
                    );
                  })
              
              ) : (
                <p>Nothing to see here yet</p>
              )}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="section__readmore">
                For More Articles Visit <Link href="/blog" className="section__readmore-link">{" "} Our Blog</Link>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Blog