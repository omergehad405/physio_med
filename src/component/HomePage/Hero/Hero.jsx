import React, { useEffect } from "react";
import "./Hero.css";
import { IoLogoFacebook } from "react-icons/io5";
function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="hero" id="home">
      <div className="hero_container">
        <div className="left">
          <div className="phone">
            <a href="tel:01285311738">
              <i className="fa-solid fa-phone"></i>
              (+20) 01285311738
            </a>
          </div>
          <div className="scroll">
            <p>scroll down</p>
            <img src="./download.png" />
          </div>
        </div>

        <div className="center">
          <img src="./hero.png" alt="main photo" />
          <div className="info" dir="rtl">
            <h2>
              مرحبا بك في <span>Physio Med</span>
            </h2>
            <h3 data-text="Developer">
              وجهتك المتخصصة للعلاج الطبيعي والتأهيل الطبي
            </h3>

            <a className="contact" href="tel:01285311738">اتصل بنا</a>
          </div>
        </div>

        <div className="right">
          <div>
            <p>follow us</p>
            <img src="./download.png" />
          </div>

          <div className="social_links">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100063831822548&locale=ar_AR"
            >
              <IoLogoFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
