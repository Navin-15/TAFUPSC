import React from "react";
import "./AboutUs.css";
import TopBar from "../components/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (

    <>

    <TopBar/>

      <div className="about-page">
      <div className="container">
        <div className="about-card shadow">
          <h1 className="about-title">About TAF</h1>

          <p className="about-text">
            TAF (The Academy Foundation) is committed to empowering students with
            high-quality educational resources, mentorship, and structured
            learning paths to achieve excellence in competitive examinations.
          </p>

          <p className="about-text">
            Our mission is to make learning accessible, affordable, and effective
            through well-researched study materials, current affairs analysis,
            and continuous practice.
          </p>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="info-box">
                <h5>🎯 Our Mission</h5>
                <p>To guide students with clarity, consistency, and confidence.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-box">
                <h5>📚 Our Resources</h5>
                <p>Notes, PYQs, current affairs, and expert guidance.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-box">
                <h5>🚀 Our Vision</h5>
                <p>Building future leaders through knowledge and discipline.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
