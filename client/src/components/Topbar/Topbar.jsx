// //submenu with submenu

// import React from "react";
// import "./Topbar.css";
// import logoImage from "../assets/taf-logo.jpg";

// const Topbar = () => {
//   return (
//     <div className="topbar shadow-sm">
//       {/* Logo */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logoImage} alt="logo" className="logo-img"/> <span className="fw-bold">TAF IAS ACCADEMY</span>
//       </div>

//       {/* Navigation */}
//       <div className="d-flex align-items-center gap-4 nav-section">

//         {/* COURSES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">COURSES ▾</span>

//           <ul className="dropdown-menu-custom">

//             {/* UPSC */}
//             <li className="dropdown-item-custom sub-parent">
//               UPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Foundation Batch</li>
//                 {/* <li className="sub-item-custom">Optional Subjects</li> */}
//                 <li className="sub-item-custom">Prelims Special</li>
//               </ul>
//             </li>

//             {/* TNPSC */}
//             <li className="dropdown-item-custom sub-parent">
//               TNPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Group 1</li>
//                 <li className="sub-item-custom">Group 2</li>
//                 <li className="sub-item-custom">Group 4</li>
//               </ul>
//             </li>

//             {/* SSC RRB */}
//             <li className="dropdown-item-custom sub-parent">
//               SSC RRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">X</li>
//                 <li className="sub-item-custom">Y</li>
//                 <li className="sub-item-custom">Z</li>
//               </ul>
//             </li>

//             {/* TRB */}
//             <li className="dropdown-item-custom sub-parent">
//               TRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">PG TRB</li>
//                 <li className="sub-item-custom">TET</li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* TEST SERIES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">TEST SERIES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               UPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Bureaucrats</li>
//                 {/* <li className="sub-item-custom">Mains Test Series</li> */}
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               TNPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Grp 1 - Saadhanai</li>
//                 <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
//                 <li className="sub-item-custom">Grp 2A Mains - Everest</li>
//                 <li className="sub-item-custom">Grp 4 - Alaikadal</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               RRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Gatiman</li>
//                 {/* <li className="sub-item-custom"></li> */}
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* OFFLINE CENTRES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">SCHEDULE ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               Regular ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">UPSC - EETHAL</li>
//                 <li className="sub-item-custom">TNPSC - FREEDOM</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               Test Batch ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Grp 1 - Saadhanai</li>
//                 <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
//                 <li className="sub-item-custom">Grp 2A Mains - Everest</li>
//                 <li className="sub-item-custom">Grp 4 - Alaikadal</li>
//               </ul>
//             </li>
//             {/* <li className="dropdown-item-custom sub-parent">
//               Lucknow ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Hazratganj</li>
//                 <li className="sub-item-custom">Gomti Nagar</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               Prayagraj ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Civil Lines</li>
//                 <li className="sub-item-custom">Katra</li>
//               </ul>
//             </li> */}
//           </ul>
//         </div>

//         {/* <span className="nav-link-text">IGP</span> */}
//       </div>

//       {/* Login Button */}
//       <button className="login-btn">TAKE YOUR TEST</button>
//     </div>
//   );
// };

// export default Topbar;

// import React, { useState } from "react";
// import "./Topbar.css";
// import logoImage from "../assets/taf-logo.jpg";

// const Topbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="topbar shadow-sm">
//       {/* LEFT SECTION */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logoImage} alt="logo" className="logo-img" />
//         <span className="fw-bold">TAF IAS ACCADEMY</span>
//       </div>

//       {/* MOBILE HAMBURGER */}
//       <div className="d-lg-none">
//         <button
//           className="login-btn"
//           style={{ padding: "8px 14px" }}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* NAVIGATION (Desktop + Mobile Toggle) */}
//       <div
//         className={`d-flex align-items-center gap-4 nav-section 
//           ${menuOpen ? "mobile-menu-open" : ""}`}
//       >
//         {/* COURSES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">COURSES ▾</span>
//           <ul className="dropdown-menu-custom">

//             <li className="dropdown-item-custom sub-parent">
//               UPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Foundation Batch</li>
//                 <li className="sub-item-custom">Prelims Special</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               TNPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Group 1</li>
//                 <li className="sub-item-custom">Group 2</li>
//                 <li className="sub-item-custom">Group 4</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               SSC RRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">X</li>
//                 <li className="sub-item-custom">Y</li>
//                 <li className="sub-item-custom">Z</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               TRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">PG TRB</li>
//                 <li className="sub-item-custom">TET</li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* TEST SERIES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">TEST SERIES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               UPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Bureaucrats</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               TNPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Grp 1 - Saadhanai</li>
//                 <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
//                 <li className="sub-item-custom">Grp 2A Mains - Everest</li>
//                 <li className="sub-item-custom">Grp 4 - Alaikadal</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               RRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Gatiman</li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* SCHEDULE */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">SCHEDULE ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               Regular ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">UPSC - EETHAL</li>
//                 <li className="sub-item-custom">TNPSC - FREEDOM</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               Test Batch ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Grp 1 - Saadhanai</li>
//                 <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
//                 <li className="sub-item-custom">Grp 2A Mains - Everest</li>
//                 <li className="sub-item-custom">Grp 4 - Alaikadal</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* LOGIN BUTTON (Desktop Only) */}
//       <button className="login-btn d-none d-lg-block">TAKE YOUR TEST</button>
//     </div>
//   );
// };

// export default Topbar;

//hamburger onclick them open menus

// import React, { useState } from "react";
// import "./Topbar.css";
// import logoImage from "../assets/taf-logo.jpg";

// const Topbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="topbar shadow-sm">
//       {/* LEFT: LOGO */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logoImage} alt="logo" className="logo-img" />
//         <span className="fw-bold">TAF IAS ACCADEMY</span>
//       </div>

//       {/* MOBILE HAMBURGER */}
//       <button
//         className="login-btn d-lg-none"
//         style={{ padding: "8px 14px" }}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         ☰
//       </button>

//       {/* NAVIGATION (Desktop always visible, Mobile shows only when menuOpen==true) */}
//       <div
//         className={`nav-section d-lg-flex ${
//           menuOpen ? "mobile-menu-open" : "mobile-menu-closed"
//         }`}
//       >
//         {/* COURSES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">COURSES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               UPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Foundation Batch</li>
//                 <li className="sub-item-custom">Prelims Special</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               TNPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Group 1</li>
//                 <li className="sub-item-custom">Group 2</li>
//                 <li className="sub-item-custom">Group 4</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               SSC RRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">X</li>
//                 <li className="sub-item-custom">Y</li>
//                 <li className="sub-item-custom">Z</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               TRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">PG TRB</li>
//                 <li className="sub-item-custom">TET</li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* TEST SERIES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">TEST SERIES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               UPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Bureaucrats</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               TNPSC ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Grp 1 - Saadhanai</li>
//                 <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
//                 <li className="sub-item-custom">Grp 2A Mains - Everest</li>
//                 <li className="sub-item-custom">Grp 4 - Alaikadal</li>
//               </ul>
//             </li>
//             <li className="dropdown-item-custom sub-parent">
//               RRB ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Gatiman</li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* SCHEDULE */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">SCHEDULE ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom sub-parent">
//               Regular ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">UPSC - EETHAL</li>
//                 <li className="sub-item-custom">TNPSC - FREEDOM</li>
//               </ul>
//             </li>

//             <li className="dropdown-item-custom sub-parent">
//               Test Batch ▸
//               <ul className="sub-menu-custom">
//                 <li className="sub-item-custom">Grp 1 - Saadhanai</li>
//                 <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
//                 <li className="sub-item-custom">Grp 2A Mains - Everest</li>
//                 <li className="sub-item-custom">Grp 4 - Alaikadal</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* LOGIN BUTTON (Desktop only) */}
//       <button className="login-btn d-none d-lg-block">TAKE YOUR TEST</button>
//     </div>
//   );
// };

// export default Topbar;

// Responsive TopBar 

import React, { useState } from "react";
import "./Topbar.css";
import logoImage from "../../assets/taf-logo.jpg";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile main menu toggle
  const [openSubMenu, setOpenSubMenu] = useState(null); // open submenu on mobile

  const toggleSub = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="topbar shadow-sm">
      {/* LEFT: LOGO */}
      <div className="d-flex align-items-center gap-3">
        <img src={logoImage} alt="logo" className="logo-img" />
        <span className="fw-bold TAF">TAF IAS ACADEMY</span>
      </div>

      {/* HAMBURGER BUTTON (Mobile Only) */}
      <button
        className="login-btn d-lg-none"
        style={{ padding: "8px 14px" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* NAVIGATION */}
      <div
        className={`nav-section d-lg-flex ${
          menuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        {/* ========================== COURSES ========================== */}
        <div className="custom-dropdown">
          <span
            className="nav-link-text mobile-click"
            onClick={() => toggleSub("courses")}
          >
            COURSES ▾
          </span>

          <ul
            className={`dropdown-menu-custom ${
              openSubMenu === "courses" ? "submenu-show" : "submenu-hide"
            }`}
          >
            <li className="dropdown-item-custom sub-parent">
              UPSC ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">Foundation Batch</li>
                <li className="sub-item-custom">Prelims Special</li>
              </ul> */}
            </li>

            <li className="dropdown-item-custom sub-parent">
              TNPSC ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">Group 1</li>
                <li className="sub-item-custom">Group 2</li>
                <li className="sub-item-custom">Group 4</li>
              </ul> */}
            </li>
            <li className="dropdown-item-custom sub-parent">
              TNUSRB ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">Group 1</li>
                <li className="sub-item-custom">Group 2</li>
                <li className="sub-item-custom">Group 4</li>
              </ul> */}
            </li>

            <li className="dropdown-item-custom sub-parent">
              SSC ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">X</li>
                <li className="sub-item-custom">Y</li>
                <li className="sub-item-custom">Z</li>
              </ul> */}
            </li>

            <li className="dropdown-item-custom sub-parent">
              RRB ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">PG TRB</li>
                <li className="sub-item-custom">TET</li>
              </ul> */}
            </li>

            <li className="dropdown-item-custom sub-parent">
              TRB ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">PG TRB</li>
                <li className="sub-item-custom">TET</li>
              </ul> */}
            </li>
          </ul>
        </div>

        {/* ========================== TEST SERIES ========================== */}
        <div className="custom-dropdown">
          <span
            className="nav-link-text mobile-click"
            onClick={() => toggleSub("testseries")}
          >
            TEST SERIES ▾
          </span>

          <ul
            className={`dropdown-menu-custom ${
              openSubMenu === "testseries" ? "submenu-show" : "submenu-hide"
            }`}
          >
            <li className="dropdown-item-custom sub-parent">
              UPSC ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Bureaucrats</li>
              </ul>
            </li>
            <li className="dropdown-item-custom sub-parent">
              TNPSC ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Grp 1 - Saadhanai</li>
                <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
                <li className="sub-item-custom">Grp 2A Mains - Everest</li>
                <li className="sub-item-custom">Grp 4 - Alaikadal</li>
              </ul>
            </li>
            <li className="dropdown-item-custom sub-parent">
              RRB ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Gatiman</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* ========================== SCHEDULE ========================== */}
        <div className="custom-dropdown">
          <span
            className="nav-link-text mobile-click"
            onClick={() => toggleSub("schedule")}
          >
            OFFLINE CENTERS ▾
          </span>

          <ul
            className={`dropdown-menu-custom ${
              openSubMenu === "schedule" ? "submenu-show" : "submenu-hide"
            }`}
          >
            <li className="dropdown-item-custom sub-parent">
              TENKASI ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">UPSC - EETHAL</li>
                <li className="sub-item-custom">TNPSC - FREEDOM</li>
              </ul> */}
            </li>

            <li className="dropdown-item-custom sub-parent">
              COIMBATORE ▸
              {/* <ul className="sub-menu-custom">
                <li className="sub-item-custom">Grp 1 - Saadhanai</li>
                <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
                <li className="sub-item-custom">Grp 2A Mains - Everest</li>
                <li className="sub-item-custom">Grp 4 - Alaikadal</li>
              </ul> */}
            </li>
            <li className="dropdown-item-custom sub-parent">
              TIRUPPUR ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              ERODE ▸
            </li>
             <li className="dropdown-item-custom sub-parent">
              SALEM ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              MADURAI ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              TRICHY ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              CUDDALORE ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              VILLUPURAM ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              TIRUNELVELI ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              KOVILPATTI ▸
            </li>
            <li className="dropdown-item-custom sub-parent">
              THANJAVUR ▸
            </li>
          </ul>
        </div>
      </div>

      {/* LOGIN BUTTON (Desktop Only) */}
      <button className="login-btn d-none d-lg-block">LOGIN/SIGNUP</button>
    </div>
  );
};

export default Topbar;
