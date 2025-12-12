import React from "react";
import "./Centers.css";

const centres = [
  {
    name: "TAF IAS - Mukherjee Nagar",
    img: "/src/assets/explore-img-1.jpg",
  },
  {
    name: "TAF IAS - Karol Bagh",
    img: "/src/assets/explore-img-2.webp",
  },
  {
    name: "TAF IAS - Patna",
    img: "/src/assets/explore-img-3.jpg",
  },
  {
    name: "TAFIAS - Lucknow",
    img: "/src/assets/explore-img-4.webp",
  },
  {
    name: "TAF IAS - Prayagraj",
    img: "/src/assets/explore-img-5.avif",
  },
  {
    name: "TAFIAS - Indore",
    img: "/src/assets/explore-img-6.avif",
  },
  {
    name: "TAF IAS - Jaipur",
    img: "/src/assets/explore-img-7.jpg",
  },
  {
    name: "TAF IAS - Muzaffarpur",
    img: "/src/assets/explore-img-8.png",
  },
  {
    name: "TAF IAS - Chandigarh",
    img: "/src/assets/explore-img-9.png",
  },
  {
    name: "TAF IAS - Bengaluru",
    img: "/src/assets/explore-img-10.png",
  },
];

const Centers = () => {
  return (
    <div className="centres-container py-5">
      <h2 className="text-center mb-5 centres-title">
        Explore TAF IAS Centres
      </h2>

      <div className="container">
        <div className="row g-4">
          {centres.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="centre-card d-flex align-items-center gap-3">
                <div className="img-wrapper">
                  <img src={item.img} alt={item.name} className="centre-img" />
                </div>
                <h5 className="centre-name">{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Centers;
