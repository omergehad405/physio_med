import React, { useEffect } from "react";
import "./ServicesPage.css";
function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="servicesPage">
      <h1 className="title">Our Services</h1>
      <div className="container">
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

        <div className="box">
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

        <div className="box">
          <img src="./services/services4.jpg" alt="" />
          <p>تأهيل ما بعد الكسور وإصابات الملاعب</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="box ">
          <img src="./services/services5.jpg" alt="" />
          <p>تصحيح انحناءات وتقوسات العمود الفقري</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="box">
          <img src="./services/services6.jpg" alt="" />
          <p>علاج التهابات الأوتار والمفاصل</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="box ">
          <img src="./services/services7.jpg" alt="" />
          <p>تخفيف تيبس وخشونة المفاصل</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="box">
          <img src="./services/services8.jpg" alt="" />
          <p>جلسات الحجامة العلاجية</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="box">
          <img src="./services/services9.jpg" alt="" />
          <p>جلسات ريكوفري</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="box">
          <img src="./services/services10.jpg" alt="" />
          <p>علاج ب الابر الجافة</p>
          <button className="cta">
            <span>تعرف علي المزيد</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
