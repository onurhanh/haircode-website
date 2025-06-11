"use client"

import About from "../../components/about";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import InstagramFeed from "../../components/galeri";
import GoogleReviewsEmbed from "../../components/googleComment";
import Navbar from "../../components/navbar";
import Services from "../../components/services";
import Slider from "../../components/slider";
import Waicon from "../../components/waicon";



export default function Home() {
  return (
    <div className="relative">
      <div id="/" className="absolute z-50">
        <Navbar />
      </div>
      <Slider />
      <About />
      <Services />
      <InstagramFeed />
      <GoogleReviewsEmbed />
      <Contact />
      <Footer />
      <Waicon />
    </div>
  );
}
