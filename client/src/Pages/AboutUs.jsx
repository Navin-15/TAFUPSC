// import React from "react";
// import "./AboutUs.css";
// import TopBar from "../components/Topbar";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AboutUs = () => {
//   return (

//     <>

//     <TopBar/>

//       <div className="about-page">
//       <div className="container">
//         <div className="about-card shadow">
//           <h1 className="about-title">About TAF</h1>

//           <p className="about-text">
//             TAF (The Academy Foundation) is committed to empowering students with
//             high-quality educational resources, mentorship, and structured
//             learning paths to achieve excellence in competitive examinations.
//           </p>

//           <p className="about-text">
//             Our mission is to make learning accessible, affordable, and effective
//             through well-researched study materials, current affairs analysis,
//             and continuous practice.
//           </p>

//           <div className="row mt-4">
//             <div className="col-md-4">
//               <div className="info-box">
//                 <h5>🎯 Our Mission</h5>
//                 <p>To guide students with clarity, consistency, and confidence.</p>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="info-box">
//                 <h5>📚 Our Resources</h5>
//                 <p>Notes, PYQs, current affairs, and expert guidance.</p>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="info-box">
//                 <h5>🚀 Our Vision</h5>
//                 <p>Building future leaders through knowledge and discipline.</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import TopBar from "../components/TopBar";

const syllabusData = {
  About: {
    "Ancient India": ["Prehistory", "IVC", "Vedic Period"],
    "Medieval India": ["Delhi Sultanate", "Mughals"],
    Topics: ["Integrity", "Aptitude", "Values"],
    Ecology: ["Ecosystem", "Biodiversity"],
  },
  Services: {
    Topics: ["Integrity", "Aptitude", "Values"],
    Ecology: ["Ecosystem", "Biodiversity"],
    Constitution: ["Preamble", "FRs"],
  },
  Eligibility: {
    Basics: ["GDP", "Inflation"],
    Ecology: ["Ecosystem", "Biodiversity"],
    Constitution: ["Preamble", "FRs"],
  },
  "Exam Structure": {
    Basics: ["GDP", "Inflation"],
    Ecology: ["Ecosystem", "Biodiversity"],
    Constitution: ["Preamble", "FRs"],
  },
  Syllabus: {
    Ecology: ["Ecosystem", "Biodiversity"],
    Basics: ["GDP", "Inflation"],
    Constitution: ["Preamble", "FRs"],
  },

};

const Syllabus = () => {
  const tabs = useMemo(() => Object.keys(syllabusData), []);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeLeftMenu, setActiveLeftMenu] = useState(
    Object.keys(syllabusData[tabs[0]])[0]
  );

  /* ✅ Sync left menu smoothly */
  useEffect(() => {
    const firstMenu = Object.keys(syllabusData[activeTab])[0];
    setActiveLeftMenu(firstMenu);
  }, [activeTab]);

  /* ✅ Memoize content to avoid flicker */
  const rightContent = useMemo(() => {
    return syllabusData[activeTab]?.[activeLeftMenu] || [];
  }, [activeTab, activeLeftMenu]);

  return (
    <>
    <TopBar/>
    <div className="container my-4 syllabus-wrapper">
      {/* Title */}
      <h2 className="syllabus-title mb-3">
        <span className="title-bar"></span> UPSC CIVIL SERVICE EXAM (CSE)
      </h2>

      {/* Horizontal Tabs */}
      <div className="tabs-scroll-wrapper mb-4">
        <div className="tabs-scroll d-flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`btn tab-btn me-2 ${
                activeTab === tab
                  ? "btn-primary"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="row syllabus-content">
        {/* Left Menu */}
        <div className="col-lg-4 col-md-5 col-12 left-menu p-0">
          {Object.keys(syllabusData[activeTab]).map((menu) => (
            <div
              key={menu}
              className={`left-menu-item ${
                activeLeftMenu === menu ? "active" : ""
              }`}
              onClick={() => setActiveLeftMenu(menu)}
            >
              {menu}
              <span className="arrow">›</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="col-lg-8 col-md-7 col-12 right-content fade-content">
          {rightContent.map((item, index) => (
            <div key={index} className="content-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Syllabus;
