import React from "react";
import { BsHouseFill } from "react-icons/bs";

export const error404={
  img:"/images/page404.png",
  title:"Oops, looks like the page not found",
  desc:"Its looks like nothing was found at this location ",
  button: {
    text: "Go Back to Home",
    href: "/",
    icon:React.createElement(BsHouseFill)
  },
}