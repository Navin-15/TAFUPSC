
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



import React, { useRef, useState, useEffect } from "react";
import "./Slider.css";

const images = [
    "/carosel-img-7.jpg",
  "/carosel-img-8.avif",
//   "/carosel-img-2.webp",
//   "/carosel-img-3.webp",
//   "/carosel-img-4.webp",
//   "/carosel-img-5.jpg",
//   "/carosel-img-6.jpg",
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goToIndex = (i) => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: width * i,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const nextIndex = (index + 1) % images.length; // loop to start
    setIndex(nextIndex);
    goToIndex(nextIndex);
  };

  const scrollLeft = () => {
    const prevIndex = (index - 1 + images.length) % images.length; // loop to last
    setIndex(prevIndex);
    goToIndex(prevIndex);
  };

  // update scroll when user manually scrolls (optional)
  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      const width = slider.clientWidth;
      const newIndex = Math.round(slider.scrollLeft / width);
      setIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="slider-container">
      <button className="slider-btn left" onClick={scrollLeft}>❮</button>

      <div className="image-slider" ref={sliderRef}>
        {images.map((src, index) => (
          <div className="slide-item" key={index}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button className="slider-btn right" onClick={scrollRight}>❯</button>
    </div>
  );
};

export default Slider;


// import React, { useRef, useState, useEffect } from "react";
// import "./Slider.css";

// const originalImages = [
//   "/carosel-img-1.webp",
//   "/carosel-img-2.webp",
//   "/carosel-img-3.webp",
//   "/carosel-img-4.webp",
//   "/carosel-img-5.jpg",
//   "/carosel-img-6.jpg",
// ];

// const Slider = () => {
//   const sliderRef = useRef(null);

//   // Duplicate first + last image to create seamless looping
//   const images = [
//     originalImages[originalImages.length - 1], // last clone
//     ...originalImages,
//     originalImages[0], // first clone
//   ];

//   const [index, setIndex] = useState(1); // Start from first REAL image

//   // Move slider to current index
//   const goToIndex = (i, smooth = true) => {
//     const width = sliderRef.current.clientWidth;
//     sliderRef.current.scrollTo({
//       left: width * i,
//       behavior: smooth ? "smooth" : "instant",
//     });
//   };

//   const nextSlide = () => {
//     setIndex((prev) => prev + 1);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => prev - 1);
//   };

//   // Watch index and adjust for infinite loop
//   useEffect(() => {
//     if (!sliderRef.current) return;

//     goToIndex(index);

//     // If moved to the last clone (right)
//     if (index === images.length - 1) {
//       setTimeout(() => {
//         setIndex(1); // jump to real 1st
//         goToIndex(1, false);
//       }, 300);
//     }

//     // If moved to the first clone (left)
//     if (index === 0) {
//       setTimeout(() => {
//         setIndex(originalImages.length); // jump to real last
//         goToIndex(originalImages.length, false);
//       }, 300);
//     }
//   }, [index]);

//   useEffect(() => {
//     // On load → go to index 1 (first real image)
//     goToIndex(1, false);
//   }, []);

//   return (
//     <div className="slider-container">

//       <button className="slider-btn left" onClick={prevSlide}>❮</button>

//       <div className="image-slider" ref={sliderRef}>
//         {images.map((src, i) => (
//           <div className="slide-item" key={i}>
//             <img src={src} alt={`Slide ${i}`} />
//           </div>
//         ))}
//       </div>

//       <button className="slider-btn right" onClick={nextSlide}>❯</button>

//     </div>
//   );
// };

// export default Slider;
