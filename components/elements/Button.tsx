import React, { ReactNode } from 'react'
type PropsButton={
  text:string,
  href:string,
  icon:ReactNode
  type?:string,
  download?:boolean
  
}
const Button = ({text,href,icon,download}:PropsButton) => {
  return (
    <a href={href} className="btn-default" download={download? true:false}> 
      {icon}
      <span> {text}</span>
    </a>
  )
}

export default Button