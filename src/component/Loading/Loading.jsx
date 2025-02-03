import React from "react";
import "./Loading.css";
function Loading() {
  return (
    <div className="spinner-container">
      <svg className="pulse-spinner" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" />
      </svg>
      <p className="loading-text">Healing in Progress... Stay Strong!</p>
    </div>
  );
}

export default Loading;
