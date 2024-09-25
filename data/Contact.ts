import React from "react";
import { BsPhoneFill, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

export const heading = {
  title: "Contact Me",
  subtitle: "Feel Free To Contact Me Any Time",
};

export const contactInfo = {
  title: "Let’s Chat!",
  desc: "Feel free to get in touch! I’d love to hear about your project or answer any questions you may have. Whether you’re looking to start something new, need a consultation, or just want to network, don’t hesitate to reach out!",
  list: [
    {
      value: "+(387) 066/179-389",
      icon: React.createElement(BsPhoneFill),
    },
    {
      value: "blagmash@gmail.com",
      icon: React.createElement(BsEnvelopeFill),
    },
    {
      value: "Univerzitetska 32, East Sarajevo",
      icon: React.createElement(BsGeoAltFill),
    },
  ],
};
export const btnSubmitData = {
  text: "Send Message",
  type: "submit",
  icon: React.createElement(BsSendFill),
};
