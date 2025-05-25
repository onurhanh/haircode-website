"use client"

import About from "../../components/about";
import Contact from "../../components/contact";
import Services from "../../components/services";
import Slider from "../../components/slider";



export default function Home() {
  return (
    <div>
    <Slider />
    <About />
    <Services />
    <Contact />
    </div>
  );
}
