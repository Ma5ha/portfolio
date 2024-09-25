import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export const bannerData = {
  imageBg: "/images/bg/bg.jpg",
  subtitle: "👋 Hi There,",
  title: "I Am a ",
  words: [
    "Angular Dev",
    "React Dev",
    "Next.js Dev",
    "Express.js Dev",
    "Freelancer",
  ],

  desc: "Experienced web developer proficient in Angular, React, Express, and Next.js, with a newfound passion for TailwindCSS. Let's create something!",
  button: {
    text: "More About Me",
    href: "#about",
    icon: React.createElement(BsPersonCircle),
  },
};

export const InfoData = [
  {
    label: "Email:",
    value: "blagmash@gmail.com",
  },
  {
    label: "Phone:",
    value: "+387-066-179-390",
  },
  {
    label: "Location:",
    value: "East Sarajevo",
  },
];

import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsDribbble,
  BsGithub,
} from "react-icons/bs";
export const SocialIcons = [
  {
    href: "#",
    icon: React.createElement(BsFacebook),
  },
  {
    href: "#",
    icon: React.createElement(BsTwitterX),
  },
  // {
  //   href: "#",
  //   icon: React.createElement(BsInstagram),
  // },
  // {
  //   href: "#",
  //   icon: React.createElement(BsDribbble),
  // },
  {
    href: "#",
    icon: React.createElement(BsGithub),
  },
];
