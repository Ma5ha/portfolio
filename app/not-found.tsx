import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { error404 } from "@/data/404page";
import Button from "@/components/elements/Button";
const NotFound = () => {
  return (
    <main className="main">
      <section className="error-page section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="error-page__banner">
                <Image
                  src={error404.img}
                  alt={error404.title}
                  width={1716}
                  height={1435}
                  className="error-page__banner-img"
                />
                <h2 className="error-page__banner-title">{error404.title}</h2>
                <p className="error-page__banner-desc">{error404.desc}</p>
                <Button {...error404.button} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
