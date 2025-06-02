"use client"

import About from "../../components/about";
import Contact from "../../components/contact";
import Directions from "../../components/directions";
import Footer from "../../components/footer";
import GoogleReviewsEmbed from "../../components/googleComment";
import InstagramFeed from "../../components/instagram";
import Services from "../../components/services";
import Slider from "../../components/slider";
import Waicon from "../../components/waicon";



export default function Home() {
  return (
    <div>
    <Slider />
    <About />
    <Services />
    <GoogleReviewsEmbed />
    <Contact />
    <Footer />
    <Waicon />
    </div>
  );
}
