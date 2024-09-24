import React from "react";
import { BsDownload } from "react-icons/bs";

export const heading={
  title:"About Me",
  subtitle:"Main Informations About Me And What I Love To Do."
}


export const profile = {
  image: "/images/about/me.jpg",
  title: "Hello, I'm Mariam Wallas, Based in Canada",
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a. Phasellus faucibus orci a purus mattis tincidunt ut non nulla. Donec ullamcorper sapien eget neque facilisis euismod.",
  list: [
    { label: "Phone :", value: "+ 113-804-9098" },
    { label: "Nationality :", value: "British" },
    { label: "skype :", value: "mariam.wallas" },
    { label: "Email :", value: "contact@mariam.com" },
    { label: "Address :", value: "1000 Proctor St USA" },
    { label: "Freelancer :", value: "Available" },
  ],
  button: {
    text: "Download My CV",
    href: "/images/cv.pdf",
    icon:React.createElement(BsDownload)
  },
};

export const features= [
  { count: "+70", text: "Completed Projects" },
  { count: "+50", text: "Happy Customers" },
  { count: "+07", text: "Years of experience" },
  { count: "+15", text: "Awards won" },
];


export const timeline = [
  {
    heading: "My Experience",
    image: "/images/about/exp.png",
    data: [
      {
        role: "Seinor UI/UX Desinger",
        place: "Spotify",
        year: "2019 - Present",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
        
      },
      {
        role: "UI/UX Designer",
        place: "Spotify",
        year: "2017 - 2018",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
      {
        role: "Junior Visual Designer",
        place: "Spotify",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
    ],
  },
  {
    heading: "My Education",
    image: "/images/about/edu.png",
    data: [
      {
        role: "Engineering Degree",
        place: "Paris University ",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
      {
        role: "Engineering Degree",
        place: "Paris University ",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
      {
        role: "Engineering Degree",
        place: "Paris University ",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
    ],
  },
];
