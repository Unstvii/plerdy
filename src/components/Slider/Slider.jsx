import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import { Navigation, Pagination } from "swiper/modules";

export function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(".swiper-slide");
      slides.forEach((slide, index) => {
        slide.setAttribute("data-slide-number", index + 1);
      });
    }
  }, []);
  return (
    <div className="test">
      <div className="swiper-container">
        <div className="slider-header">
          <h2>
            6 Reasons{" "}
            <span>to Use Plerdy Data for a Website Usability Audit</span>
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={17}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Для екрану від 640px
            },
            768: {
              slidesPerView: 2, // Для екрану від 768px
            },
            1024: {
              slidesPerView: 3, // Для екрану від 1024px
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          ref={swiperRef}
        >
          <SwiperSlide>
            <h3>You will benefit from our SaaS marketing product</h3>
            <p>
              Our team has developed a powerful tool to audit website content –
              a heatmap that features more than 100 reports for e-marketers and
              business owners.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>We have 10+ years of experience in digital marketing</h3>
            <p>
              The Plerdy team has rich experience in auditing, analyzing, and
              improving eCommerce websites to boost their conversion rates. So
              we are well aware of all the weak spots of eCommerce websites and
              know what data you need to run a usability audit of your website.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>
              We enable generating hypotheses about what leads to low website
              conversions
            </h3>
            <p>
              Thanks to the data gathered with the Plerdy heatmap about your
              website visitors’ behavior, you can generate hypotheses that
              potentially explain which functional flaws and problems are
              causing a low conversion on your website and how.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>The analysis of the dynamic elements of the website</h3>
            <p>
              Some services disregard such an important aspect as the
              clickability analysis of the dynamic elements when UX auditing,
              including drop-down menu, pop-up, and slider. However, thanks to
              the unique Plerdy auditing functionality, you will receive this
              information..
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>You will benefit from our SaaS marketing product</h3>
            <p>
              Our team has developed a powerful tool to audit website content –
              a heatmap that features more than 100 reports for e-marketers and
              business owners.
            </p>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        <div className="swiper-pagination">Hello world</div>
      </div>
    </div>
  );
}
