import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export const bannerData={
    imageBg:"/images/bg/bg.jpg",
    subtitle:"👋 Hi There,",
    title:"I Am a ",
    words:["Developer","Designer","Freelancer"],
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a.  ",
    button:{
      text:'More About Me',
      href:'#about',
      icon:React.createElement(BsPersonCircle)
    }
}

export const InfoData=[
    {
      label:"Email:",
      value:"contact@mariam.com"
    },
    {
      label:"Phone:",
      value:"+113-804-9098"
    },
    {
      label:"Location:",
      value:"California ,USA"
    },
]

import { BsFacebook ,BsTwitterX,BsInstagram,BsDribbble,BsGithub} from "react-icons/bs";
export const SocialIcons=[
  {
    href:"#",
    icon:React.createElement(BsFacebook)
  },
  {
    href:"#",
    icon:React.createElement(BsTwitterX)
  },
  {
    href:"#",
    icon:React.createElement(BsInstagram)
  }
  ,
  {
    href:"#",
    icon:React.createElement(BsDribbble)
  }
  ,
  {
    href:"#",
    icon:React.createElement(BsGithub)
  }

]
 
 
