import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Tentang Kami</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text mb-4 text-center">
              <h5 className="fw-bold">
                <strong>Excellence in Visual Organization</strong>
              </h5>
            </div>
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  <strong>Di EVO</strong>, kami percaya bahwa setiap gambar
                  menceritakan sebuah cerita dan setiap video menangkap momen
                  yang layak untuk dibagikan. Sebagai tim profesional di bidang
                  IT dan media kreatif, kami mengkhususkan diri dalam mengubah
                  ide menjadi narasi visual yang menakjubkan. Misi kami adalah
                  untuk mengangkat merek Anda melalui konten visual yang luar
                  biasa dan mampu beresonansi dengan audiens Anda.
                </p>
              </Split>
            </div>
            <div className="text mt-4">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  <strong>EVO</strong> adalah platform kolaboratif yang
                  didirikan oleh sekelompok pemikir kreatif yang berdedikasi
                  untuk mendorong batasan dalam bercerita secara visual. Dengan
                  keahlian dalam fotografi, videografi, dan media digital, kami
                  menggabungkan keterampilan teknis dengan visi artistik untuk
                  menyajikan konten berkualitas tinggi yang menonjol di lanskap
                  digital saat ini.
                </p>
              </Split>
            </div>
            <div className="text mt-4">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Bersama dengan <strong>Malang Lens Creative</strong>, kami
                  memanfaatkan kekuatan kolaborasi untuk menghadirkan perspektif
                  yang beragam dan ide-ide inovatif ke dalam setiap proyek.
                  Bersama-sama, kami berusaha untuk mencapai keunggulan dalam
                  setiap karya, memastikan bahwa klien kami tidak hanya menerima
                  visual, tetapi juga pengalaman lengkap yang menarik dan
                  menginspirasi.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
