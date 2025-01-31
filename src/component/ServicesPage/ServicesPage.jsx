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
        <div className="box left">
          <img src="./services1.png" alt="" />
          <p>علاج الانزلاق الغضروفي وآلام الفقرات العنقية والقطنية</p>
        </div>

        <div className="box right">
          <img src="./services2.png" alt="" />
          <p>تأهيل حالات الشلل (النصفي/الرباعي)</p>
        </div>

        <div className="box left">
          <img src="./services3.png" alt="" />
          <p>علاج التهابات باطن القدم (الشوكة العظمية)</p>
        </div>

        <div className="box right">
          <img src="./services4.png" alt="" />
          <p>تأهيل ما بعد الكسور وإصابات الملاعب</p>
        </div>

        <div className="box left">
          <img src="./services5.png" alt="" />
          <p>تصحيح انحناءات وتقوسات العمود الفقري</p>
        </div>

        <div className="box right">
          <img src="./services6.png" alt="" />
          <p>علاج التهابات الأوتار والمفاصل</p>
        </div>

        <div className="box left">
          <img src="./services7.png" alt="" />
          <p>تخفيف تيبس وخشونة المفاصل</p>
        </div>

        <div className="box right">
          <img src="./services8.png" alt="" />
          <p>جلسات الحجامة العلاجية</p>
        </div>

        <div className="box left">
          <img src="./services8.png" alt="" />
          <p>برامج تنزيل الوزن ثلاثية المفعول</p>
        </div>

        <div className="box right">
          <img src="./services8.png" alt="" />
          <p>جلسات التخسيس وإذابة الدهون</p>
        </div>

        <div className="box left">
          <img src="./services8.png" alt="" />
          <p>جلسات التخسيس وإذابة الدهون</p>
        </div>

        <div className="box right">
          <img src="./services8.png" alt="" />
          <p>أنظمة غذائية متكاملة</p>
        </div>

        <div className="box left">
          <img src="./services8.png" alt="" />
          <p>جلسات شد الترهلات</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
