import React from "react"
import { BsPhoneFill,BsEnvelopeFill,BsGeoAltFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

export const heading={
  title:"Contact Me",
  subtitle:"Feel Free To Contact Me Any Time"
}

export const contactInfo={
  title:"Let's talk about everything!",
  desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  list:[
    {
      value:"+(684) 555-0102",
      icon:React.createElement(BsPhoneFill)
    },
    {
      value:"mariamdemo@gmail.com",
      icon:React.createElement(BsEnvelopeFill)
    },
    {
      value:"241 Royal Mesa, New Jersey",
      icon:React.createElement(BsGeoAltFill)
    },

  ]
}
export const btnSubmitData={
    text: "Send Message",
    type:"submit",
    icon:React.createElement(BsSendFill)
  
}