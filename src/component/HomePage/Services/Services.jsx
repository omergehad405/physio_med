import React from "react";
import "./Services.css";
import { Link } from "react-router";
function Services() {
  return (
    <section className="services" id="services">
      <h1 className="title">Our Services</h1>
      <div className="container">
        <div className="boxs">
          <div className="box ">
            <img src="./services/services1.jpg" alt="" />
            <p>علاج الانزلاق الغضروفي وآلام الفقرات </p>

            <button className="cta">
              <span>تعرف علي المزيد</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>

          <div className="box ">
            <img src="./services/services2.jpg" alt="" />
            <p>تأهيل حالات الشلل (النصفي/الرباعي)</p>

            <button className="cta">
              <span>تعرف علي المزيد</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>

          <div className="box ">
            <img src="./services/services3.jpg" alt="" />
            <p>علاج التهابات باطن القدم (الشوكة العظمية)</p>

            <button className="cta">
              <span>تعرف علي المزيد</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <button>
          <Link to="/services" className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">اطلع علي جميع الخدمات</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Services;
