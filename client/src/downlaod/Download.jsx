
import React from "react";
import "./Download.css";
import { BsDownload } from "react-icons/bs";

const Download = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <button className="syllabus-btn d-flex align-items-center">
        <span className="btn-text">Download</span>

        <span className="icon-wrapper">
          <BsDownload size={20} className="download-icon" />
        </span>
      </button>
    </div>
  );
};

export default Download;