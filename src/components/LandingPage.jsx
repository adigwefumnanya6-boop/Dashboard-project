import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import Categories from "./Categories";
import About from "./About";
import FeaturedCourses from "./FeaturedCourses";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Categories />
      <About />
      <FeaturedCourses />
      <Footer />
    </div>
  );
}
