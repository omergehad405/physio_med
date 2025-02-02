import React from "react";
import "./Footer.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import { IoLogoFacebook } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="footer_container">
      <div>
        <h1>contact us now</h1>
        <a href=""> contact us</a>
      </div>

      <footer>
        <div className="container">
          <div>
            <img src="./logo.png" alt="" />
          </div>
          <div>
            <h1>quick links</h1>
            <ul>
              <li>
                <Link to="/" href="">
                  home
                </Link>
              </li>
              <li>
                <Link to="">about</Link>
              </li>
              <li>
                <Link to="">services</Link>
              </li>
              <li>
                <Link to="">contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>contact us</h1>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:01285311738">01285311738</a>
              </li>
              <li>
                <IoLogoFacebook />
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100063831822548&locale=ar_AR"
                >
                  facebook page
                </a>
              </li>
              <li>
                <MdEmail />
                <a href="mailto:" target="_blank">
                  example@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="locations">
            <h1>our clinic locations</h1>
            <ul>
              <li>
                <a href="">
                  مصر الجديدة: 70 شارع عبد العزيز فهمي، ميدان سانت فاتيما، أعلى
                  بنك المصرف المتحد
                </a>
              </li>
              <li>
                <a href="">
                  مدينة نصر: آخر مكرم عبيد، السراج مول، برج 2، مدخل 3
                </a>
              </li>
              <li>
                <a href="">مدينة نصر: 13 شارع زهير صبري، موازي لشارع الطيران</a>
              </li>
              <li>
                <a href="">
                  القاهرة الجديدة: مول UMC، حي جنوب الأكاديمية، التجمع الأول
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
