import React from 'react'
import { posts } from '@/.velite'
import {sortPosts,DateFormate,calculateReadingTime} from '@/components/lib/utils'
import Image from 'next/image'
import { MDXContent } from '@/components/lib/mdx-components';
import SocialMedia from '@/components/elements/SocialMedia';
import BackToPage from '@/components/elements/BackToPage';

type PageSingleProps={
  params:{
    slug:string;
  }

}

async function getPostFromParams(params:PageSingleProps["params"]){
  const slug = params?.slug
  const sortedPosts=sortPosts(posts?.filter((post)=>post?.published))
  const post =sortedPosts?.find((post) => post?.slugAsParams === slug);
  return post;
}

const PageSingle = async({params}:PageSingleProps) => {
   const post = await getPostFromParams(params)
    if(!post ){
      return <p>Post Not Found</p>
    }

  return (
    <section className="blog section section--light" >
        <div className="container" data-cues="fadeIn">        
          <div className="row" >
            <div className="col-lg-12">
            <BackToPage PageName="blog" />
              <div className="blog-single card card--white mt-10">
                <Image className="blog-single__img" 
                    src={post?.image} 
                    alt=""
                    priority
                    width={1270} 
                    height={700}
                /> 

                <div className="blog-single__content">
                  <div className="blog-single__content__meta">
                    <div  className="category">{post?.category} </div>
                    <div className="date">
                      <span>{DateFormate(post?.date)}</span>
                      <span className="dot"></span>
                      <span>{calculateReadingTime(post?.body)} Min Read</span>
                    </div>
                  </div>

                  <h2 className="blog-single__content__title">{post?.title}</h2>

                  <div className="blog-single__content__body">
                    <MDXContent code={post?.body} />
                  </div>

                  <div className="blog-single__content__footer">
                    <ul className="tags">
                      {
                        post?.tags?.map((tag,index)=>{
                          return(
                            <li className="tags__item" key={index}><span  className="tags__link">{tag}</span></li>
                          )
                        })
                      }  
                    </ul>

                    <div className="blog-single__content__footer__social-media">
                      <SocialMedia />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default PageSingle