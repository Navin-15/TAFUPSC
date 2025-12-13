// import React from "react";
// import "./FreeResource.css";
// import { useNavigate } from "react-router-dom";
// // import { FaBook } from "react-icons/fa";
// // import { GiLaurelsTrophy } from "react-icons/gi";
// // import { BsJournalBook } from "react-icons/bs";
// // import { AiOutlineCalendar } from "react-icons/ai";
// // import { BiListCheck } from "react-icons/bi";

// const FreeResources = () => {
//   const navigate = useNavigate();

//   const resources = [
//     {
//       title: "About US",
//     //   description: "Udaan, Prahaar, Q&A Bank etc.",
//     //   icon: <FaBook />,
//       bgColor: "#d0e7ff",
//     },
//     {
//       title: "Materials",
//     //   description: "Udaan, Prahaar, Q&A Bank etc.",
//     //   icon: <FaBook />,
//       bgColor: "#d0e7ff",
//     },
//     {
//       title: "Current Affairs",
//     //   description: "Comprehensive, Short & NCERT-Based Notes",
//     //   icon: <BsJournalBook />,
//       bgColor: "#ffdada",
//     },
//     {
//       title: "PYQs",
//     //   description: "Prelims, Mains & Optional PYQs",
//     //   icon: <GiLaurelsTrophy />,
//       bgColor: "#ffe5cc",
//     },
//     {
//       title: "Others",
//     //   description: "Prelims Practice, Mains Practice & Blogs etc.",
//     //   icon: <BiListCheck />,
//       bgColor: "#d9f0e0",
//     },
//   ];

//   return (
//     <div className="free-resources-container">
//       <h2 className="resources-title">For you From TAF</h2>
//       <div className="resources-grid">
//         {resources.map((item, index) => (
//           <div
//             className="resource-card"
//             key={index}
//             style={{ backgroundColor: item.bgColor }}
//             onClick={() => item.path && navigate(item.path)}
//           >
//             {/* <div className="icon-wrapper">{item.icon}</div> */}
//             <h3 className="resource-title">{item.title}</h3>
//             <p className="resource-description">{item.description}</p>
//             <span className="dropdown-arrow">&#9662;</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FreeResources;

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./FreeResource.css";

const FreeResources = () => {
  const navigate = useNavigate();

  const resources = [
    {
      title: "About UPSC",
      bgColor: "#d0e7ff",
      path: "/about-us",
    },
    {
      title: "Materials",
      bgColor: "#d0e7ff",
    },
    {
      title: "Current Affairs",
      bgColor: "#ffdada",
    },
    {
      title: "PYQs",
      bgColor: "#ffe5cc",
    },
    {
      title: "Others",
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
            onClick={() => item.path && navigate(item.path)}
          >
            <h3 className="resource-title">{item.title}</h3>
            <span className="dropdown-arrow">&#9662;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeResources;
