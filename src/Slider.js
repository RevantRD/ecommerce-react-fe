import React from "react";
import { Link } from "react-router-dom";
//Slider component for displaying some products as Bootstrap carousel
const Slider = () => {
  return (
    <div className="container">
      <h1 className="text-center text-white fw-bold mt-4 mb-4" id="heading">
        FEATURED PRODUCTS
      </h1>
      <div className="row">
        <div className="col mb-5 glass-align" id="featured-products-glass">
          <div
            id="large-screen"
            className="carousel slide d-none d-lg-block text-center"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://m.media-amazon.com/images/I/51SifvgL+VL._AC_UY1100_.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Shirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Shirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://imagescdn.simons.ca/images/1533-5227-16-A1_3/colour-block-hoodie.jpg?__=14"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hoodie</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11959220/2020/9/1/7bbe8f25-aa00-4f8c-b23d-c67b2ac3ebc31598952266614-Roadster-Men-Black-Solid-Hooded-Sweatshirt-2541598952264894-1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hoodie</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://5.imimg.com/data5/SELLER/Default/2020/12/ML/VG/LK/29174263/haldi-special-party-wear-dresses.jpeg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://img.faballey.com/images/Product/ITN03948Z/1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/f/tr:w-300,/3fa43c0DR835GRBK_1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Skirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/0/tr:w-300,/60c26b1ORN021_2.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Skirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://img.faballey.com/images/Product/SKT00766Z/1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Skirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://www.onefridayworld.com/cdn/shop/products/VT4B8032_533x.jpg?v=1670651408"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/act9497-1blue-silk-and-organza-girls-dress-gl0060_2_.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://images.bewakoof.com/t640/men-s-brown-loose-comfort-fit-cargo-harem-pants-hp5008-607941-1690900811-1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Pant</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#large-screen"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#large-screen"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- Medium screen --> */}
          <div
            id="medium-screen"
            className="carousel slide d-none d-md-block d-lg-none text-center"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://m.media-amazon.com/images/I/51SifvgL+VL._AC_UY1100_.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Shirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Shirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://5.imimg.com/data5/SELLER/Default/2020/12/ML/VG/LK/29174263/haldi-special-party-wear-dresses.jpeg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://img.faballey.com/images/Product/ITN03948Z/1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://img.faballey.com/images/Product/SKT00766Z/1.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Skirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src="https://www.onefridayworld.com/cdn/shop/products/VT4B8032_533x.jpg?v=1670651408"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#medium-screen"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#medium-screen"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- Small screen --> */}
          <div
            id="small-screen"
            className="carousel slide d-sm-block d-lg-none d-md-none text-center"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        height="200px"
                        src="https://m.media-amazon.com/images/I/51SifvgL+VL._AC_UY1100_.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Shirt</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        height="200px"
                        src="https://5.imimg.com/data5/SELLER/Default/2020/12/ML/VG/LK/29174263/haldi-special-party-wear-dresses.jpeg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        height="200px"
                        src="https://media.boohoo.com/i/boohoo/bmm22596_sand_xl/male-sand-basic-over-the-head-hoodie/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hoodie</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        height="200px"
                        src="https://images-static.nykaa.com/uploads/8bebfdcd-2fec-454c-a4d1-ce0acd06b65a.jpg?tr=w-300,cm-pad_resize"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        height="200px"
                        src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21188040/2023/2/8/b3ffd27a-3e89-4b9e-9927-ede99636f7ce1675833846139-Mast--Harbour-Women-Skirts-7991675833845629-2.jpg"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dress</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        height="200px"
                        src="https://imagescdn.simons.ca/images/1533-5227-16-A1_3/colour-block-hoodie.jpg?__=14"
                        className="card-img-top image-cards"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hoodie</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <Link to={"#"} className="btn" id="cart-btn">
                          <i className="fa fa-cart-shopping"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#small-screen"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#small-screen"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
