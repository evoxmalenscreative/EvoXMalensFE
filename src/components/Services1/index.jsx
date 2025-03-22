import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Layanan Kami
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Layanan
            </h3>
          </Split>
          <span className="tbg">Layanan</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/2.svg)" }}
          >
            <h4 className="custom-font">
              Layanan <br /> Terbaik Kami
            </h4>
            <Link href="/about/about-light">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Lihat semua</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-display2"></span>
            <h6>Pengembangan Aplikasi & Web </h6>
            <p style={{ textAlign: "justify", margin: "10px" }}>
              Mulai dari desain antarmuka yang intuitif hingga fungsionalitas
              yang optimal, kami memastikan setiap proyek memberikan pengalaman
              pengguna yang luar biasa.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>Produksi Konten</h6>
            <p style={{ textAlign: "justify" }}>
              Menawarkan editing video, fotografi, dan videografi sinematik
              untuk membantu Anda menarik perhatian audiens, meningkatkan brand
              awareness, dan mencapai tujuan bisnis Anda.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>Desain & Mockup</h6>
            <p style={{ textAlign: "justify" }}>
              Desain dapat berupa desain grafis (seperti logo, poster, brosur &
              Mockup adalah representasi visual dari suatu desain
            </p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
