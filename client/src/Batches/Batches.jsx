
import React from "react";
import "./Batches.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import OnlineTag from "../assets/onlineTag.webp";


const batches = [
  {
    id: 1,
    title: "BATCH - 1",
    lang: "English",
    price: 9999,
    oldPrice: 19999,
    start: "28 July 2025",
    end: "30 September 2026",
    // image: "/src/assets/card-img-1.png",
  },
  {
    id: 2,
    title: "BATCH - 2",
    lang: "English",
    price: 9999,
    oldPrice: 19999,
    start: "28 July 2025",
    end: "30 September 2026",
    // image: "/src/assets/card-img-1.png",
  },
  {
    id: 3,
    title: "BATCH - 3",
    lang: "English",
    price: 4999,
    oldPrice: 9999,
    start: "30 May 2025",
    end: "30 September 2025",
    // image: "/src/assets/card-img-1.png",
  },
  {
    id: 4,
    title: "BATCH - 4",
    lang: "English",
    price: 4999,
    oldPrice: 9999,
    start: "30 May 2025",
    end: "30 September 2025",
    // image: "/src/assets/card-img-1.png",
  },
];

const Batches = () => {
  return (
    <div className="container my-5">
      <h2 className="section-title text-center">Explore Our Batches</h2>

      {/* Category Tabs */}
      <div className="batch-tabs d-flex justify-content-center gap-4 mt-3">
        <button className="tab active">GS Foundation</button>
        <button className="tab">Repeaters</button>
        <button className="tab">Test Series</button>
      </div>

      {/* SLIDER SECTION */}
      <div className="slider-wrapper mt-5 position-relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {batches.map((batch) => (
            <SwiperSlide key={batch.id}>
              <div className="batch-card shadow-sm">
                <div className="online-tag">
                  <img src={OnlineTag} alt="logo" className="online-img" />
                </div>

                    <img src={batch.image} className="card-img-top" alt="" />
                  
                <div className="card-body p-3">
                  <h5 className="card-title">{batch.title}</h5>

                  <span className="lang-tag">{batch.lang}</span>

                  <p className="desc mt-2">
                    This batch is for Prelims & Mains Preparation
                  </p>

                  <p className="dates">
                    <i className="bi bi-calendar2-check"></i> Starts on{" "}
                    <b>{batch.start}</b> Ends on <b>{batch.end}</b>
                  </p>

                  <div className="price-box">
                    <span className="new-price">₹ {batch.price}/-</span>
                    <span className="old-price">{batch.oldPrice}</span>
                  </div>

                  <div className="d-flex gap-2 mt-3">
                    <button className="explore-btn">EXPLORE</button>
                    <button className="buy-btn">BUY NOW</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT ARROW */}
        <div className="swiper-button-prev custom-arrow">
          {/* <i className="bi bi-chevron-left"></i> */}
        </div>

        {/* RIGHT ARROW */}
        <div className="swiper-button-next custom-arrow">
          {/* <i className="bi bi-chevron-right"></i> */}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-4">
        <button className="view-all-btn">View All Batches</button>
      </div>
    </div>
  );
};

export default Batches;
