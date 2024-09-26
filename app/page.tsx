//components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}

      {/* <Blog/> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
