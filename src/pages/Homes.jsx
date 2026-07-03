import React from "react";
import Banner from "../components/Banner";
import OurServices from "../components/OurServices";
import Locaion from "../components/Locaion";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";

const Homes = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <About />
      <WhyChooseUs />
      <Testimonial />
      <Locaion />
    </div>
  );
};

export default Homes;
