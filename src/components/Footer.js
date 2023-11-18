import React from "react";
import { NavLink } from "react-router-dom";
//Footer component to display all the links for the page
//Used NavLink tag to link the page
const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="row   pt-5 ">
          <div className="col-md-3 col-sm-12   mb-5 text-center d-flex flex-column">
            <NavLink to={"#"} className="fs-3 mb-3 text-white footer-link">
              WOMEN
            </NavLink>
            <NavLink href="#" className="link mb-3 text-white footer-link">
              Dresses
            </NavLink>
            <NavLink href="#" className=" text-white mb-3 footer-link">
              Pants
            </NavLink>
            <NavLink href="#" className=" text-white mb-3 footer-link">
              Skirts
            </NavLink>
          </div>
          <div className="col-md-3 col-sm-12 mb-5 text-center d-flex flex-column">
            <NavLink href="#" className="fs-3 mb-3 text-white footer-link ">
              MEN
            </NavLink>
            <NavLink href="#" className=" text-white mb-3 footer-link">
              Shirts
            </NavLink>
            <NavLink href="#" className=" text-white mb-3 footer-link">
              Pants
            </NavLink>
            <NavLink href="#" className=" text-white mb-3 footer-link">
              Hoodies
            </NavLink>
          </div>
          <div className="col-md-3 col-sm-12 mb-5 text-center d-flex flex-column">
            <NavLink href="#" className="fs-3 text-white footer-link mb-3">
              KIDS
            </NavLink>
            <NavLink href="#" className=" text-white footer-link mb-3">
              Dresses
            </NavLink>
          </div>
          <div className="col-md-3 col-sm-12 mb-5 text-center d-flex flex-column">
            <NavLink href="#" className="fs-3 footer-link mb-3 text-white">
              LINKS
            </NavLink>
            <NavLink href="#" className=" text-white footer-link mb-3">
              Home
            </NavLink>
            <NavLink href="#" className=" text-white footer-link mb-3">
              Login
            </NavLink>
            <NavLink href="#" className=" text-white footer-link mb-3">
              Contact
            </NavLink>
          </div>
          <hr className="w-50 mx-auto  mb-5" />
          <p className="mb-5 text-center">
            Copyright &copy;RD Shopping 2022-2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
