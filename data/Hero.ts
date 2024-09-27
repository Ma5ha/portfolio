import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export const bannerData = {
  imageBg: "/images/bg/desk-3139127.jpg",
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

import { BsFacebook, BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";
export const SocialIcons = [
  {
    href: "https://www.facebook.com/mladen.blagovcanin.5",
    icon: React.createElement(BsFacebook),
  },
  {
    href: "https://www.linkedin.com/in/mladen-blagovcanin-02849a1b9/",
    icon: React.createElement(BsLinkedin),
  },
  {
    href: "https://github.com/Ma5ha",
    icon: React.createElement(BsGithub),
  },
];
