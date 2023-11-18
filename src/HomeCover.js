import React from "react";
import bannerLarge from "./images/banner-image2-lg.jpeg";
import bannerMedium from "./images/banner-image2-md.jpg";
import bannerSmall from "./images/banner-image2-sm.jpeg";
const HomeCover = () => {
  return (
    <div class="image-banner">
      {/* <!-- Large screen --> */}
      <img
        src={bannerLarge}
        class="banner d-lg-block d-none"
        alt="men banner"
      />
      {/* <!-- Medium screen --> */}
      <img
        src={bannerMedium}
        class="banner d-none d-md-block d-lg-none"
        alt="men banner"
      />
      {/* <!-- Small screen --> */}
      <img
        src={bannerSmall}
        class="banner d-sm-block d-lg-none d-md-none"
        alt="men banner"
      />
      {/* <div className="z-0 top-50 start-50 position-absolute p-5 rounded-3">
        <h1 className="fw-bold">RD SHOPPING</h1>
      </div> */}
      <div id="logo-text">
        <h1 class="text-style1" alt="">
          RD
        </h1>
        <h1 class="text-style2" alt="">
          Shopping
        </h1>
      </div>
      <p class="slogan">
        Shop till you drop, from the comfort of your own home
      </p>
    </div>
  );
};

export default HomeCover;
