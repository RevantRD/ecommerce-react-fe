import React from "react";
import Header from "./Header";
import HomeCover from "./HomeCover";
import Footer from "./Footer";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeCover />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
