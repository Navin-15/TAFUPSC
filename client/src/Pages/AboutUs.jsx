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

//selected code by developer

// import React, { useState, useEffect, useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./AboutUs.css";
// import Topbar from "../components/Topbar/Topbar";

// const syllabusData = {
//   About: {
//     "Ancient India": ["Prehistory", "IVC", "Vedic Period"],
//     "Medieval India": ["Delhi Sultanate", "Mughals"],
//     Topics: ["Integrity", "Aptitude", "Values"],
//     Ecology: ["Ecosystem", "Biodiversity"],
//   },
//   Services: {
//     Topics: ["Integrity", "Aptitude", "Values"],
//     Ecology: ["Ecosystem", "Biodiversity"],
//     Constitution: ["Preamble", "FRs"],
//   },
//   Eligibility: {
//     Basics: ["GDP", "Inflation"],
//     Ecology: ["Ecosystem", "Biodiversity"],
//     Constitution: ["Preamble", "FRs"],
//   },
//   "Exam Structure": {
//     Basics: ["GDP", "Inflation"],
//     Ecology: ["Ecosystem", "Biodiversity"],
//     Constitution: ["Preamble", "FRs"],
//   },
//   Syllabus: {
//     Ecology: ["Ecosystem", "Biodiversity"],
//     Basics: ["GDP", "Inflation"],
//     Constitution: ["Preamble", "FRs"],
//   },

// };

// const AboutUs = () => {
//   const tabs = useMemo(() => Object.keys(syllabusData), []);

//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [activeLeftMenu, setActiveLeftMenu] = useState(
//     Object.keys(syllabusData[tabs[0]])[0]
//   );

//   /* ✅ Sync left menu smoothly */
//   useEffect(() => {
//     const firstMenu = Object.keys(syllabusData[activeTab])[0];
//     setActiveLeftMenu(firstMenu);
//   }, [activeTab]);

//   /* ✅ Memoize content to avoid flicker */
//   const rightContent = useMemo(() => {
//     return syllabusData[activeTab]?.[activeLeftMenu] || [];
//   }, [activeTab, activeLeftMenu]);

//   return (
//     <>
//     <Topbar/>
//     <div className="container my-4 syllabus-wrapper">
//       {/* Title */}
//       <h2 className="syllabus-title mb-3">
//         <span className="title-bar"></span> UPSC CIVIL SERVICE EXAM (CSE)
//       </h2>

//       {/* Horizontal Tabs */}
//       <div className="tabs-scroll-wrapper mb-4">
//         <div className="tabs-scroll d-flex">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`btn tab-btn me-2 ${
//                 activeTab === tab
//                   ? "btn-primary"
//                   : "btn-outline-secondary"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="row syllabus-content">
//         {/* Left Menu */}
//         <div className="col-lg-4 col-md-5 col-12 left-menu p-0">
//           {Object.keys(syllabusData[activeTab]).map((menu) => (
//             <div
//               key={menu}
//               className={`left-menu-item ${
//                 activeLeftMenu === menu ? "active" : ""
//               }`}
//               onClick={() => setActiveLeftMenu(menu)}
//             >
//               {menu}
//               <span className="arrow">›</span>
//             </div>
//           ))}
//         </div>

//         {/* Right Content */}
//         <div className="col-lg-8 col-md-7 col-12 right-content fade-content">
//           {rightContent.map((item, index) => (
//             <div key={index} className="content-card">
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AboutUs;

// did not responsive for left arrow

import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import Topbar from "../components/Topbar/Topbar";
import Download from '../downlaod/Download'

const syllabusData = {
  About: {
    "Exam conducting body": ["Upsc"],
    "Level of exam": ["National Level"],
    "Exam type": ["Pen and Paper (offline)"],
    "Frequency of exam": ["Annual"],
    "Official website": [{
      label: "https://upsc.gov.in/",
      url: "https://upsc.gov.in/"
    }],
  },
  Services: {
    "All India Services": ["Indian administration services (ias)", "Indian police service (ips)", "Indian forest service (ifs)"],
    "Group A Services": 
    [
    "Indian Foreign Service (IFS)",
    "Indian Audit and Accounts Service (IA&AS)",
    "Indian Railway Management Service (IRMS)",
    "Indian Revenue Service (Customs & Indirect Taxes)",
    "Indian Revenue Service (Income Tax)",
    "Indian Civil Accounts Service (ICAS)",
    "Indian Corporate Law Service (ICLS)",
    "Indian Defence Accounts Service (IDAS)",
    "Indian Defence Estates Service (IDES)",


    "Indian Information Service (IIS)",
    "Indian Postal Service (IPoS)",
    "Indian Railway Personnel Service (IRPS)",
    "Indian Railway Accounts Service (IRAS)",
    "Indian P&T Accounts and Finance Service (IP&TAFS)",
    "EcoIndian Railway Protection Force Service (RPF)system",
    "Indian Communication Finance Services (ICFS)",
    "Indian Trade Service (Grade III)",
    ],
    "Group B Services": 
    [
      "Armed Forces Headquarters Civil Service (Section Officer’s Grade)",
      "Delhi, Andaman and Nicobar Islands, Lakshadweep, Daman & Diu, and Dadra & Nagar Haveli Civil Service (DANICS)",
      "Delhi, Andaman and Nicobar Islands, Lakshadweep, Daman & Diu, and Dadra & Nagar Haveli Police Service (DANIPS)",
      "Pondicherry Civil Service (PONDICS)",
      "Pondicherry Police Service (PONDIPS)",
    ],
  },
  Eligibility: {
    "EDUCATIONAL QUALIFICATIONS": [" GRADUATION FROM A INSTITUTON RECOGNIZED UNDER UGC ACT"],

    "Age Limit": ["MINIMUM : 21 YEARS", "MAXIMUM : 32 YEARS"],

    "Age Relaxation": ["OBC – 3 YEARS", "SC/ST – 5 YEARS"],

    "Nationality": ["INDIAN CITIZEN"],

    "Number of Attempts": ["GENERAL / EWS – 6", "OBC – 9", "SC/ST – UNLIMITED "],
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

const AboutUs = () => {
  const tabs = useMemo(() => Object.keys(syllabusData), []);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeLeftMenu, setActiveLeftMenu] = useState(
    Object.keys(syllabusData[tabs[0]])[0]
  );

  /* ✅ Sync left menu */
  useEffect(() => {
    const firstMenu = Object.keys(syllabusData[activeTab])[0];
    setActiveLeftMenu(firstMenu);
  }, [activeTab]);

  /* ✅ Right content */
  const rightContent = useMemo(() => {
    return syllabusData[activeTab]?.[activeLeftMenu] || [];
  }, [activeTab, activeLeftMenu]);

  /* ✅ Check for tabular layout */
  const isTabularView =
    activeTab === "About" || activeTab === "Eligibility";

  return (
    <>
      <Topbar />

      <div className="container my-4 syllabus-wrapper">
        {/* Title */}
        <h2 className="syllabus-title mb-3">
          <span className="title-bar"></span> UPSC CIVIL SERVICE EXAM (CSE)
        </h2>

        {/* Horizontal Tabs (UNCHANGED) */}
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

        {/* 🔹 CONDITIONAL CONTENT */}
        {isTabularView ? (
          /* ===== TABULAR COLUMN VIEW ===== */
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "30%" }}>Category</th>
                  <th>Topics</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(syllabusData[activeTab]).map(
                  ([category, topics]) => (
                    <tr key={category}>
                      <td className="fw-semibold">{category}</td>
                      <td>
                        <ul className="mb-0 ps-3">
                          {topics.map((topic, idx) => (
                            // <li key={idx}>{topic}</li>
                            <li key={idx} className="list-unstyled" >
                                {typeof topic === "object" ? (
                                  <a
                                    href={topic.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-decoration-none"
                                  >
                                    {topic.label}
                                  </a>
                                  ) : (
                                    topic
                                )}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* ===== EXISTING LAYOUT (UNCHANGED) ===== */
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
        )}
      </div>
      <Download></Download>
    </>
  );
};

export default AboutUs;
