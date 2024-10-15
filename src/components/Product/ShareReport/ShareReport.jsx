import React from "react";
import "./ShareReport.css";
import { HiOutlineHeart } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

const ShareReport = () => {
  return (
    <div className="share-report-container">
      <HiOutlineHeart className={"round-icon"} />
      <div className="primary-button">
        <FaRegFileAlt
          style={{
            height: 24,
            width: 24,
          }}
        />
        <p
          style={{
            margin: 0,
            padding: 0,
          }}
          className="primary-button-text"
        >
          Show Report
        </p>
      </div>
      <div className="primary-button">
        <IoLogoWhatsapp
          style={{
            height: 24,
            width: 24,
          }}
        />
        <p
          style={{
            margin: 0,
            padding: 0,
          }}
          className="primary-button-text"
        >
          Whatsapp
        </p>
      </div>
      <IoShareSocialOutline className={"round-icon"} />
    </div>
  );
};

const styles = {};

export default ShareReport;
