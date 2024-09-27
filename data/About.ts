import React from "react";
import { BsDownload } from "react-icons/bs";

export const heading = {
  title: "About Me",
  subtitle: "Main Informations About Me And What I Love To Do.",
};

export const profile = {
  image: "/images/about/me.jpg",
  title: "Hello, my name is Mladen Blagovčanin",
  bio: "With nearly 4 years of experience in web development, JavaScript has become my go-to language. I have a deep understanding of the entire JS ecosystem, from building intuitive front-end interfaces to handling back-end development seamlessly.",
  list: [
    { label: "Phone :", value: "+387-066-179-390" },
    // { label: "Nationality :", value: "Serbian" },
    // { label: "skype :", value: "mariam.wallas" },
    { label: "Email :", value: "blagmash@gmail.com" },
    { label: "Address :", value: "Univrzitetska, East Sarajevo" },
    { label: "Freelancer :", value: "Available" },
  ],
  button: {
    text: "Download My CV",
    href: "/images/cv.pdf",
    icon: React.createElement(BsDownload),
  },
};

export const features = [
  { count: "+3", text: "Completed Projects" },
  // { count: "+6", text: "Happy Customers" },
  { count: "+4", text: "Years of experience" },
  // { count: "+15", text: "Awards won" },
];

export const timeline = [
  {
    heading: "My Experience",
    image: "/images/about/exp.png",
    data: [
      {
        role: "Intern Frontend Developer",
        place: "Klika",
        year: "2020 - 2020",
        desc: "Internship, course designed to educate people in agile development trough practice",
      },
      {
        role: "Frontend Developer",
        place: "TechWave",
        year: "2021 - 2022",
        desc: "Frontend developer, responsible for creating engaging ads that work with Google Ads.",
      },
      {
        role: "Web Developer",
        place: "ZenDev",
        year: "2022 - present",
        desc: "Outsourcing company where I have been contracted to many big companies like Siemens and Seco.",
      },
    ],
  },
  {
    heading: "My Education",
    image: "/images/about/edu.png",
    data: [
      {
        role: "Engineering Degree",
        place: "University of East Sarajevo",
        year: "2016 - 2020",
        desc: "Gained a strong foundation in problem-solving and software design principles. Specialized in software engineering, focusing on developing scalable applications.",
      },
    ],
  },
];
