// import React from "react";
// import "./Topbar.css";
// import logoImage from "../assets/PWonlyIAS.png";

// const Topbar = () => {
//   return (
//     <div className="topbar">
//       {/* ---------- LOGO ---------- */}
//       <div className="logo-section bg-danger">
//         <img src={logoImage} alt="logo" className="logo-img" />
//       </div>

//       {/* ---------- NAV MENU ---------- */}
//       <div className="menu">
        
//         {/* ONLINE COURSES */}
//         <div className="menu-item">
//           <span>ONLINE COURSES ▾</span>

//           <div className="dropdown">
//             <div className="dropdown-item">UPSC Foundation</div>
//             <div className="dropdown-item">Optional Courses</div>
//             <div className="dropdown-item">NCERT Courses</div>
//             <div className="dropdown-item">Answer Writing</div>
//           </div>
//         </div>

//         {/* TEST SERIES */}
//         <div className="menu-item">
//           <span>TEST SERIES ▾</span>

//           <div className="dropdown">
//             <div className="dropdown-item">Prelims Test</div>
//             <div className="dropdown-item">Mains Test</div>
//             <div className="dropdown-item">Interview Guidance</div>
//           </div>
//         </div>

//         {/* OFFLINE CENTRES */}
//         <div className="menu-item">
//           <span>OFFLINE CENTRES ▾</span>

//           <div className="dropdown">
//             <div className="dropdown-item">Delhi</div>
//             <div className="dropdown-item">Patna</div>
//             <div className="dropdown-item">Lucknow</div>
//             <div className="dropdown-item">Prayagraj</div>
//           </div>
//         </div>

//         {/* NON-DROPDOWN ITEM */}
//         <div className="menu-item">
//           <span>IGP</span>
//         </div>
//       </div>

//       {/* ---------- LOGIN BUTTON ---------- */}
//       <div className="login-btn">Login & Register</div>
//     </div>
//   );
// };

// export default Topbar;

// import React from "react";
// import "./Topbar.css";

// // Import your logo
// import logoImage from "../assets/PWonlyIAS.png";

// const Topbar = () => {
//   return (
//     <div className="topbar shadow-sm">
//       {/* Logo */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logoImage} alt="logo" className="logo-img" />
//       </div>

//       {/* Navigation */}
//       <div className="d-flex align-items-center gap-4 nav-section">

//         {/* ONLINE COURSES */}
//         <div className="dropdown custom-dropdown">
//           <span
//             className="dropdown-toggle nav-link-text"
//             data-bs-toggle="dropdown"
//           >
//             ONLINE COURSES ▾
//           </span>

//           <ul className="dropdown-menu custom-menu">
//             <li className="dropdown-item custom-item">UPSC Foundation</li>
//             <li className="dropdown-item custom-item">Optional Courses</li>
//             <li className="dropdown-item custom-item">NCERT Courses</li>
//             <li className="dropdown-item custom-item">Answer Writing</li>
//           </ul>
//         </div>

//         {/* TEST SERIES */}
//         <div className="dropdown custom-dropdown">
//           <span
//             className="dropdown-toggle nav-link-text"
//             data-bs-toggle="dropdown"
//           >
//             TEST SERIES ▾
//           </span>

//           <ul className="dropdown-menu custom-menu">
//             <li className="dropdown-item custom-item">Prelims Test</li>
//             <li className="dropdown-item custom-item">Mains Test</li>
//             <li className="dropdown-item custom-item">Interview Guidance</li>
//           </ul>
//         </div>

//         {/* OFFLINE CENTRES */}
//         <div className="dropdown custom-dropdown">
//           <span
//             className="dropdown-toggle nav-link-text"
//             data-bs-toggle="dropdown"
//           >
//             OFFLINE CENTRES ▾
//           </span>

//           <ul className="dropdown-menu custom-menu">
//             <li className="dropdown-item custom-item">Delhi</li>
//             <li className="dropdown-item custom-item">Patna</li>
//             <li className="dropdown-item custom-item">Lucknow</li>
//             <li className="dropdown-item custom-item">Prayagraj</li>
//           </ul>
//         </div>

//         {/* IGP (No Dropdown) */}
//         <span className="nav-link-text">IGP</span>
//       </div>

//       {/* Login & Register Button */}
//       <button className="login-btn">Login & Register</button>
//     </div>
//   );
// };

// export default Topbar;

// without sub menus

// import React from "react";
// import "./Topbar.css";

// // Import your logo image
// import logoImage from "../assets/PWonlyIAS.png";

// const Topbar = () => {
//   return (
//     <div className="topbar shadow-sm">
//       {/* Logo */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logoImage} alt="logo" className="logo-img" />
//       </div>

//       {/* Navigation */}
//       <div className="d-flex align-items-center gap-4 nav-section">

//         {/* ONLINE COURSES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">COURSES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom">UPSC</li>
//             <li className="dropdown-item-custom">TNPSC</li>
//             <li className="dropdown-item-custom">SSC RRB</li>
//             <li className="dropdown-item-custom">TRB</li>
//           </ul>
//         </div>

//         {/* TEST SERIES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">TEST SERIES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom">UPSC</li>
//             <li className="dropdown-item-custom">TNPSC</li>
//             <li className="dropdown-item-custom">RRB</li>
//           </ul>
//         </div>

//         {/* OFFLINE CENTRES */}
//         <div className="custom-dropdown">
//           <span className="nav-link-text">OFFLINE CENTRES ▾</span>

//           <ul className="dropdown-menu-custom">
//             <li className="dropdown-item-custom">Delhi</li>
//             <li className="dropdown-item-custom">Patna</li>
//             <li className="dropdown-item-custom">Lucknow</li>
//             <li className="dropdown-item-custom">Prayagraj</li>
//           </ul>
//         </div>

//         {/* IGP NO DROPDOWN */}
//         <span className="nav-link-text">IGP</span>
//       </div>

//       {/* Login Button */}
//       <button className="login-btn">Login & Register</button>
//     </div>
//   );
// };

// export default Topbar;

//submenu with submenu

import React from "react";
import "./Topbar.css";
import logoImage from "../assets/taf-logo.jpg";

const Topbar = () => {
  return (
    <div className="topbar shadow-sm">
      {/* Logo */}
      <div className="d-flex align-items-center gap-3">
        <img src={logoImage} alt="logo" className="logo-img"/> <span className="fw-bold">TAF IAS ACCADEMY</span>
      </div>

      {/* Navigation */}
      <div className="d-flex align-items-center gap-4 nav-section">

        {/* COURSES */}
        <div className="custom-dropdown">
          <span className="nav-link-text">COURSES ▾</span>

          <ul className="dropdown-menu-custom">

            {/* UPSC */}
            <li className="dropdown-item-custom sub-parent">
              UPSC ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Foundation Batch</li>
                {/* <li className="sub-item-custom">Optional Subjects</li> */}
                <li className="sub-item-custom">Prelims Special</li>
              </ul>
            </li>

            {/* TNPSC */}
            <li className="dropdown-item-custom sub-parent">
              TNPSC ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Group 1</li>
                <li className="sub-item-custom">Group 2</li>
                <li className="sub-item-custom">Group 4</li>
              </ul>
            </li>

            {/* SSC RRB */}
            <li className="dropdown-item-custom sub-parent">
              SSC RRB ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">X</li>
                <li className="sub-item-custom">Y</li>
                <li className="sub-item-custom">Z</li>
              </ul>
            </li>

            {/* TRB */}
            <li className="dropdown-item-custom sub-parent">
              TRB ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">PG TRB</li>
                <li className="sub-item-custom">TET</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* TEST SERIES */}
        <div className="custom-dropdown">
          <span className="nav-link-text">TEST SERIES ▾</span>

          <ul className="dropdown-menu-custom">
            <li className="dropdown-item-custom sub-parent">
              UPSC ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Bureaucrats</li>
                {/* <li className="sub-item-custom">Mains Test Series</li> */}
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
                {/* <li className="sub-item-custom"></li> */}
              </ul>
            </li>
          </ul>
        </div>

        {/* OFFLINE CENTRES */}
        <div className="custom-dropdown">
          <span className="nav-link-text">SCHEDULE ▾</span>

          <ul className="dropdown-menu-custom">
            <li className="dropdown-item-custom sub-parent">
              Regular ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">UPSC - EETHAL</li>
                <li className="sub-item-custom">TNPSC - FREEDOM</li>
              </ul>
            </li>
            <li className="dropdown-item-custom sub-parent">
              Test Batch ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Grp 1 - Saadhanai</li>
                <li className="sub-item-custom">Grp 2 Mains - Gratitude</li>
                <li className="sub-item-custom">Grp 2A Mains - Everest</li>
                <li className="sub-item-custom">Grp 4 - Alaikadal</li>
              </ul>
            </li>
            {/* <li className="dropdown-item-custom sub-parent">
              Lucknow ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Hazratganj</li>
                <li className="sub-item-custom">Gomti Nagar</li>
              </ul>
            </li>
            <li className="dropdown-item-custom sub-parent">
              Prayagraj ▸
              <ul className="sub-menu-custom">
                <li className="sub-item-custom">Civil Lines</li>
                <li className="sub-item-custom">Katra</li>
              </ul>
            </li> */}
          </ul>
        </div>

        {/* <span className="nav-link-text">IGP</span> */}
      </div>

      {/* Login Button */}
      <button className="login-btn">TAKE YOUR TEST</button>
    </div>
  );
};

export default Topbar;
