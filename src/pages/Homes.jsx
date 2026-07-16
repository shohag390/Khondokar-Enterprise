import Banner from "../components/Banner";
import OurServices from "../components/OurServices";
import Locaion from "../components/Locaion";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products/Products";

const Homes = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <About />
      <Products />
      <WhyChooseUs />
      <Testimonial />
      <Locaion />
    </div>
  );
};

export default Homes;
