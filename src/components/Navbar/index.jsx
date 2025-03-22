/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";
import BookingAlert from "../../common/BookingAlert"; // Import the alert component

const Navbar = ({ lr, nr, theme }) => {
  const [showBookingAlert, setShowBookingAlert] = useState(false);

  const handleBookingClick = (e) => {
    e.preventDefault();
    setShowBookingAlert(true);
  };

  return (
    <>
      <nav
        ref={nr}
        className={`navbar navbar-expand-lg change ${
          theme === "themeL" ? "light" : ""
        }`}
      >
        <div className="container">
          <Link href="/">
            <a className="logo">
              {theme ? (
                theme === "themeL" ? (
                  <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileDropdown}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about/about-light">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <Link href="/showcase_default/showcase-light">
                  <a className="nav-link">Showcase</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <Link href="/works/works-light">
                  <a className="nav-link">Portofolio</a>
                </Link>
                <div className="dropdown-menu"></div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <a
                  href="#"
                  className="nav-link disabled"
                  onClick={handleBookingClick}
                >
                  Booking Online
                </a>
                <div className="dropdown-menu"></div>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .nav-link.disabled {
            color: #6c757d;
            pointer-events: none;
            cursor: default;
            opacity: 0.6;
          }
        `}</style>
      </nav>

      {/* Alert Dialog */}
      <BookingAlert
        isOpen={showBookingAlert}
        onClose={() => setShowBookingAlert(false)}
      />
    </>
  );
};

export default Navbar;
