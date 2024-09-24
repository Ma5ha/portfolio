import React from 'react'
import Image from 'next/image'

type PropsTimeline={
  image:string,
  role:string,
  place:string,
  year:string,
  desc:string
}

const Timeline = ({image,role,place,year,desc}:PropsTimeline) => {
  return (
    <div className="timeline__item ">
      <Image src={image} alt="" width={40} height={40} className="timeline__item__img"/>
      <div className="timeline__item__content">
        <h6 className="timeline__item__title">{role}</h6>
        <div className="">
        <div className="timeline__item__info">
          <span className="timeline__item__place">{place}</span>
          <span className="dot"></span>
          <span className="timeline__item__year"> {year}</span>
        </div>
        </div>
        
        <p className="timeline__item__desc">{desc}</p>
      </div>
    </div>       
  )
}

export default Timeline