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
            <img src="./services1.png" alt="" />
            <p>علاج الانزلاق الغضروفي وآلام الفقرات العنقية والقطنية</p>
          </div>

          <div className="box ">
            <img src="./services2.png" alt="" />
            <p>تأهيل حالات الشلل (النصفي/الرباعي)</p>
          </div>

          <div className="box ">
            <img src="./services3.png" alt="" />
            <p>علاج التهابات باطن القدم (الشوكة العظمية)</p>
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
