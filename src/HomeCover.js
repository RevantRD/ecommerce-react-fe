import React from "react";
import bannerLarge from "./images/banner-image2-lg.jpeg";
import bannerMedium from "./images/banner-image2-md.jpg";
import bannerSmall from "./images/banner-image2-sm.jpeg";
// Home cover component to display the banner of the site
// This component has different images for different screen sizes for responsiveness
const HomeCover = () => {
  return (
    <div className="image-banner">
      {/* <!-- Large screen --> */}
      <img
        src={bannerLarge}
        className="banner d-lg-block d-none"
        alt="men banner"
      />
      {/* <!-- Medium screen --> */}
      <img
        src={bannerMedium}
        className="banner d-none d-md-block d-lg-none"
        alt="men banner"
      />
      {/* <!-- Small screen --> */}
      <img
        src={bannerSmall}
        className="banner d-sm-block d-lg-none d-md-none"
        alt="men banner"
      />
      <div id="logo-text">
        <h1 className="text-style1" alt="">
          RD
        </h1>
        <h1 className="text-style2" alt="">
          Shopping
        </h1>
      </div>
      <p className="slogan">
        Shop till you drop, from the comfort of your own home
      </p>
    </div>
  );
};

export default HomeCover;
