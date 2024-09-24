import React from "react";
import Image from "next/image";
type PropsTestimonialItem = {
  img: string;
  desc: string;
  name: string;
  role: string;
};
const TestimonialItem = ({ img, desc, name, role }: PropsTestimonialItem) => {
  return (
    <div className="testimonial card card--light">
      <div className="testimonial__image">
        <Image src={img} alt="" width={100} height={100}  />
      </div>
      <p className="testimonial__text">{desc}</p>
      <div className="testimonial__info">
        <p className="testimonial__info__name">{name}</p>
        <span className="dot"></span>
        <p className="testimonial__info__role">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
