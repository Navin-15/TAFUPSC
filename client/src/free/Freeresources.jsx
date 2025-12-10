import React from "react";
import "./FreeResources.css";
// import { FaBook } from "react-icons/fa";
// import { GiLaurelsTrophy } from "react-icons/gi";
// import { BsJournalBook } from "react-icons/bs";
// import { AiOutlineCalendar } from "react-icons/ai";
// import { BiListCheck } from "react-icons/bi";

const FreeResources = () => {
  const resources = [
    {
      title: "Materials",
    //   description: "Udaan, Prahaar, Q&A Bank etc.",
    //   icon: <FaBook />,
      bgColor: "#d0e7ff",
    },
    {
      title: "PYQs",
    //   description: "Prelims, Mains & Optional PYQs",
    //   icon: <GiLaurelsTrophy />,
      bgColor: "#ffe5cc",
    },
    {
      title: "Current Affairs",
    //   description: "Comprehensive, Short & NCERT-Based Notes",
    //   icon: <BsJournalBook />,
      bgColor: "#ffdada",
    },
    {
      title: "Others",
    //   description: "Prelims Practice, Mains Practice & Blogs etc.",
    //   icon: <BiListCheck />,
      bgColor: "#d9f0e0",
    },
  ];

  return (
    <div className="free-resources-container">
      <h2 className="resources-title">For you From TAF</h2>
      <div className="resources-grid">
        {resources.map((item, index) => (
          <div
            className="resource-card"
            key={index}
            style={{ backgroundColor: item.bgColor }}
          >
            {/* <div className="icon-wrapper">{item.icon}</div> */}
            <h3 className="resource-title">{item.title}</h3>
            <p className="resource-description">{item.description}</p>
            <span className="dropdown-arrow">&#9662;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeResources;
