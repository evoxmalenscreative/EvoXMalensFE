/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme === "light" ? (
                  <img src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about/about-light">
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="#">
                        <a className="link">
                          <span className="nm">03.</span>Showcase
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/works/works-light">
                        <a className="link">
                          <span className="nm">04.</span>Portfolio
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Address :</h6>
                  <p>Malang, Indonesia.</p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">evoxmalens2025@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
