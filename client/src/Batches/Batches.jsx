import React from "react";
import "./Batches.css";
import "bootstrap/dist/css/bootstrap.min.css";

const batches = [
  {
    id: 1,
    title: "SRIJAN 2.0 (Pre + Mains) 2026",
    lang: "Hinglish",
    price: 9999,
    oldPrice: 19999,
    start: "28 July 2025",
    end: "30 September 2026",
    image: "/images/batch1.png",
  },
  {
    id: 2,
    title: "SRIJAN 2.0 (Pre + Mains) 2026",
    lang: "Hindi",
    price: 9999,
    oldPrice: 19999,
    start: "28 July 2025",
    end: "30 September 2026",
    image: "/images/batch2.png",
  },
  {
    id: 3,
    title: "SRIJAN Mains Batch 2025",
    lang: "English",
    price: 4999,
    oldPrice: 9999,
    start: "30 May 2025",
    end: "30 September 2025",
    image: "/images/batch3.png",
  },
];

const Batches = () => {
  return (
    <div className="container my-5">
      <h2 className="section-title text-center">Explore Our Batches</h2>

      {/* Category Tabs */}
      <div className="batch-tabs d-flex justify-content-center gap-4 mt-3">
        <button className="tab">GS Foundation</button>
        <button className="tab active">Repeaters</button>
        {/* <button className="tab">Degree Programs</button>
        <button className="tab">Combo (GS+Optional)</button>
        <button className="tab">Optional</button> */}
        <button className="tab">Test Series</button>
      </div>

      {/* Cards Row */}
      <div className="row mt-5 gx-4">
        {batches.map((batch) => (
          <div className="col-md-4" key={batch.id}>
            <div className="batch-card shadow-sm">
              <span className="online-tag">ONLINE</span>

              <img src={batch.image} className="card-img-top" alt="" />

              <div className="card-body">
                <h5 className="card-title">{batch.title}</h5>

                <span className="lang-tag">{batch.lang}</span>

                <p className="desc mt-2">
                  This batch is for Prelims & Mains Preparation
                </p>

                <p className="dates">
                  <i className="bi bi-calendar2-check"></i> Starts on{" "}
                  <b>{batch.start}</b> &nbsp;Ends on <b>{batch.end}</b>
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
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-4">
        <button className="view-all-btn">View All Batches</button>
      </div>
    </div>
  );
};

export default Batches;
