import React from "react";
import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="image">
          <img src="./about.jpg" alt="" />
        </div>
        <div className="info">
          <h1 className="title">About Us</h1>
          <p>
            نحن مركز متخصص في العلاج الطبيعي و التأهيلات الطبية نلتزم بتقديم
            أعلى مستويات العلاج الطبيعي والتأهيل الطبي، مع الاهتمام بكل حالة على
            حدة لضمان أفضل النتائج.
          </p>

          <p>
            في Physio Med، نقدم لك رعاية صحية متكاملة تعتمد على أحدث التقنيات
            والأساليب العلاجية لضمان راحتك وشفائك بأفضل الطرق. يتميز مركزنا
            بفريق من الأخصائيين ذوي الخبرة العالية، حيث نهدف إلى تحسين جودة
            حياتك واستعادة نشاطك بكل كفاءة وأمان.
          </p>

          <ul>
            <li>خبرة تمتد لأكثر من 15 عامًا في مجال العلاج الطبيعي</li>
            <li>فريق علاجي ذو كفاءة عالية</li>
            <li>نلتزم بأعلى معايير الخصوصية والراحة</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
