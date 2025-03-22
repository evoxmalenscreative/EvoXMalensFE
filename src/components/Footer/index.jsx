/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  return (
    <footer
      className={`footer-half ${noSubBG ? "" : "sub-bg"} section-padding pb-0`}
    >
      <div className="container">
        <div className="row">
          {/* Bagian Kiri - Logo & Kontak */}
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="Logo" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> evoxmalens2025@gmail.com
                  </li>
                  <li>
                    <span>Address : </span> Malang, Indonesia.
                  </li>
                </ul>
              </div>
              <div className="credit-info custom-font">
                <p>
                  <span>Credit : </span> Dibuat oleh rayhanrwa, farrasandy, dan
                  mochawik. Karya ini diperuntukkan untuk EVO dan Malens
                  Creative, sebagai wujud kolaborasi kreatif yang menginspirasi.
                </p>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a
                    href="https://www.instagram.com/malens.creative?igsh=NTc4MTIwNjQ2YQ=="
                    className="icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan - About / Deskripsi Website */}
          <div className="col-lg-5 offset-lg-2">
            <div className="about-footer">
              <h6 className="custom-font stit simple-btn">Tentang Kami</h6>
              <p>
                EVO adalah platform kreatif yang mengkhususkan diri dalam
                fotografi dan videografi. Bersama Malang Lens Creative, kami
                menciptakan konten visual berkualitas tinggi untuk mengangkat
                merek Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyrights text-center">
          <p>
            © 2025 Evo Production | Powered by Malens Creative. Designed by{" "}
            <a href="#">Evo Production</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
