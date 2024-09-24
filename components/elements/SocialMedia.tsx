import React from 'react'
import { SocialIcons } from '@/data/Hero'
import Link from 'next/link'

const SocialMedia = () => {
  return (
    <ul className="social-media ">
      {SocialIcons?.map((item,index)=>{
        return(
          <li className="social-media__item" key={index}>
            <Link href={item?.href} className="social-media__link">{item?.icon}</Link>
        </li>
        )
      })}
  </ul>
  )
}

export default SocialMedia