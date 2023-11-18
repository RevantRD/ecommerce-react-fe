import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/RD.png"; //Imported image as logo
const Header = () => {
  return (
    <div>
      {/* Navbar using bootstrap 5 */}
      <nav className="navbar navbar-custom navbar-expand-lg  ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" href="#">
            <img src={logo} className="logo" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <form className="d-flex mx-auto" role="search">
              <input
                className="form-control me-2 search-sm"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light search-sm" type="submit">
                Search
              </button>
            </form>
            <div className="">
              <button className="btn btn-outline-light" type="submit">
                Login
              </button>
              <Link className=" ms-3 me-2">
                <i
                  className="fa-solid fa-cart-shopping fa-xl"
                  style={{ color: "#f5f9ff" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <ul className="nav d-flex justify-content-center bg-light">
        <li className="nav-item">
          <Link
            className="nav-link text-dark  active"
            aria-current="page"
            href="#"
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " href="#">
            ALL PRODUCTS
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-dark "
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            MEN
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" href="#">
                All
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Shirts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Pants
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" href="#">
                Hoodies
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-dark "
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            WOMEN
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" href="#">
                All
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Dresses
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Pants
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" href="#">
                Skirts
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " href="#">
            KIDS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " href="#">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
