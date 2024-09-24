import React from 'react'

type PropsFeature={
  count:string,
  text:string
}

const Feature = ({count,text}:PropsFeature) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6" >
      <div className="feature card card--light">
        <h1 className="feature__number">{count}</h1>
        <p className="feature__text">{text}</p>
      </div>
    </div>
  )
}

export default Feature