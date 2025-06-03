import React from "react";
import Header from "./Components/Header";
import Description from "./Components/Description";
import Features from "./Components/Features";
import RealEstateInsights from "./Components/Testimonial"
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Organizing from "./Components/Organizing"


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Features />
      <RealEstateInsights />
      <Organizing/>
      
           
      <Footer />
    </>
  );
}

export default App;
