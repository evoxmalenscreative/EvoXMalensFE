/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const PortfolioTwoColumn = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto234.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Katalog</h6>
                <span>
                  <a href="#0">Ramadhan</a>, <a href="#0">Style</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="#0">
                    <a>
                      <img src="/img/portfolio/porto235.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Culinary Photography</h6>
                    <span>
                      <a href="#0">Soto</a>, <a href="#0">Daging</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto236.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                <span>
                  <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="#0">
                    <a>
                      <img src="/img/portfolio/porto236.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Culinary Photography</h6>
                    <span>
                      <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="#0">
                    <a>
                      <img src="/img/portfolio/porto237.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Culinary Photography</h6>
                    <span>
                      <a href="#0">Dimsum</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto238.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                <span>
                  <a href="#0">Kopi</a>, <a href="#0">Bubuk</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="#0">
                    <a>
                      <img src="/img/portfolio/porto239.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Culinary Photography</h6>
                    {/* <span>
                      <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto240.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                {/* <span>
                      <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                    </span> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto241.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                {/* <span>
                      <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                    </span> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto242.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                {/* <span>
                      <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                    </span> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto243.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                {/* <span>
                      <a href="#0">Klepon</a>, <a href="#0">Legenda</a>
                    </span> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto244.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                <span>
                      <a href="#0">Cuka</a>, <a href="#0">Apel</a>
                    </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="#0">
                <a>
                  <img src="/img/portfolio/porto245.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Culinary Photography</h6>
                <span>
                      <a href="#0">Cuka</a>, <a href="#0">Apel</a>
                    </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
