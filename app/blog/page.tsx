
 import { posts } from "#site/content"
//import { posts } from './.velite'
import { sortPosts,DateFormate} from "@/components/lib/utils";
import BackToPage from '@/components/elements/BackToPage';
import Heading from '@/components/elements/Heading';
import {heading,blogSetting}from "@/data/Blog"
import PaginationControls from '@/components/elements/PaginationControls';
import Footer from '@/components/Footer';
import Article from "@/components/elements/Article";
import Image from "next/image";
import Link from "next/link";

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}


const BlogPage =  async ({ searchParams }: BlogPageProps) => {
  const POSTS_PER_PAGE = blogSetting?.nbPostBlogPage;
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts?.filter((post) => post?.published));
  const totalPages = Math.ceil(sortedPosts?.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts?.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const start = (Number(currentPage) - 1) * Number(POSTS_PER_PAGE);
  const end = start + Number(POSTS_PER_PAGE);

  console.log("total page",totalPages)


  return (
    <main className="main">
      <section className="blog section section--light" >
        <div className="container">
          <BackToPage PageName="home" />
          <Heading {...heading} />

          <div className="row">
            {displayPosts?.length > 0 ? (
                  displayPosts?.map((post,index) => { 
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
          
          {
            totalPages>1 && (
              <div className="row">
                <div className="col-12">
                  <PaginationControls
                    length={sortedPosts?.length}
                    nbPosts={blogSetting?.nbPostBlogPage}
                    hasNextPage={end < sortedPosts?.length}
                    hasPrevPage={start > 0}
                    pageName="blog"
                  />
                  
                </div>
              </div>
            )
          }
          
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default BlogPage