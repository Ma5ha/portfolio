import React from 'react'
import type { Post } from '../lib/type'
import { DateFormate ,calculateReadingTime} from '../lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type ArticleProps={
  post:Post
}
const Article = ({post}:ArticleProps) => {
  return (
    <div className="article card card--white">
        <div className="article__image">
            <Image 
              className="article__image__img" 
              src={post?.image} 
              alt=""
              priority
              width={1270} 
              height={700}
            />
        </div>
                        
        <div className="article__content">
          <div className="article__content__meta">
            <div className="category">{post?.category} </div>
            <div className="date">
              <span>{DateFormate(post?.date)}</span>
              <span className="dot"></span>
              <span>{calculateReadingTime(post?.body)} Min Read</span>
            </div>
          </div>
          <h5 className="article__content__title">
            <Link href={post?.slug}>{post?.title}</Link>
          </h5>
          <Link className="btn-default" href={post?.slug} target="_blank">
            <span>Read More</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
    </div>
  )
}

export default Article