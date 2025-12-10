
// import React, { useRef } from "react";
// import "./Slider.css";

// const images = [
//   "/public/carosel-img-1.webp",
//   "/public/carosel-img-2.webp",
//   "/public/carosel-img-3.webp",
//   "/public/carosel-img-4.webp",
//   "/public/carosel-img-5.jpg",
//   "/public/carosel-img-6.jpg",
  
// ];

// const Slider = () => {
//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     const width = sliderRef.current.clientWidth; // scroll 1 full image
//     sliderRef.current.scrollBy({
//       left: -width,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     const width = sliderRef.current.clientWidth; // scroll 1 full image
//     sliderRef.current.scrollBy({
//       left: width,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="slider-container">
//       <button className="slider-btn left" onClick={scrollLeft}>❮</button>

//       <div className="image-slider bg-danger" ref={sliderRef}>
//         {images.map((src, index) => (
//           <div className="slide-item" key={index}>
//             <img src={src} alt={`Slide ${index}`} />
//           </div>
//         ))}
//       </div>

//       <button className="slider-btn right" onClick={scrollRight}>❯</button>
//     </div>
//   );
// };

// export default Slider;

//ok slider

// import React, { useRef, useState, useEffect } from "react";
// import "./Slider.css";

// const images = [
//     "/carosel-img-7.jpg",
//   "/carosel-img-8.avif",
// //   "/carosel-img-2.webp",
// //   "/carosel-img-3.webp",
// //   "/carosel-img-4.webp",
// //   "/carosel-img-5.jpg",
// //   "/carosel-img-6.jpg",
// ];

// const Slider = () => {
//   const sliderRef = useRef(null);
//   const [index, setIndex] = useState(0);

//   const goToIndex = (i) => {
//     const width = sliderRef.current.clientWidth;
//     sliderRef.current.scrollTo({
//       left: width * i,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     const nextIndex = (index + 1) % images.length; // loop to start
//     setIndex(nextIndex);
//     goToIndex(nextIndex);
//   };

//   const scrollLeft = () => {
//     const prevIndex = (index - 1 + images.length) % images.length; // loop to last
//     setIndex(prevIndex);
//     goToIndex(prevIndex);
//   };

//   // update scroll when user manually scrolls (optional)
//   useEffect(() => {
//     const slider = sliderRef.current;

//     const handleScroll = () => {
//       const width = slider.clientWidth;
//       const newIndex = Math.round(slider.scrollLeft / width);
//       setIndex(newIndex);
//     };

//     slider.addEventListener("scroll", handleScroll);
//     return () => slider.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="slider-container">
//       <button className="slider-btn left" onClick={scrollLeft}>❮</button>

//       <div className="image-slider" ref={sliderRef}>
//         {images.map((src, index) => (
//           <div className="slide-item" key={index}>
//             <img src={src} alt={`Slide ${index}`} />
//           </div>
//         ))}
//       </div>

//       <button className="slider-btn right" onClick={scrollRight}>❯</button>
//     </div>
//   );
// };

// export default Slider;

import React, { useRef, useState, useEffect } from "react";
import "./Slider.css";

const images = [
  "/carosel-img-7.jpg",
  "/carosel-img-8.avif",
];

const Slider = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideHeight, setSlideHeight] = useState(350);

  // Dynamically adjust width + height on all screen sizes
  const updateSizes = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;

      // Responsive height logic
      let height = 350; // default

      if (width <= 480) height = 180;       // mobile
      else if (width <= 768) height = 250;  // small tablets
      else if (width <= 1024) height = 300; // big tablets / small laptop
      else height = 350;                    // desktop

      setSlideWidth(width);
      setSlideHeight(height);
    }
  };

  useEffect(() => {
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const goToIndex = (i) => {
    sliderRef.current.scrollTo({
      left: slideWidth * i,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
    goToIndex(nextIndex);
  };

  const scrollLeft = () => {
    const prevIndex = (index - 1 + images.length) % images.length;
    setIndex(prevIndex);
    goToIndex(prevIndex);
  };

  // Track manual scroll
  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      const newIndex = Math.round(slider.scrollLeft / slideWidth);
      setIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [slideWidth]);

  return (
    <div className="slider-container" ref={containerRef}>
      <button className="slider-btn left" onClick={scrollLeft}>❮</button>

      <div className="image-slider" ref={sliderRef}>
        {images.map((src, i) => (
          <div
            className="slide-item"
            key={i}
            style={{
              minWidth: `${slideWidth}px`,
              height: `${slideHeight}px`
            }}
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              style={{ height: `${slideHeight}px` }}
            />
          </div>
        ))}
      </div>

      <button className="slider-btn right" onClick={scrollRight}>❯</button>
    </div>
  );
};

export default Slider;
