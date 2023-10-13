import React from "react";
import "./styles.css";

function MapControls({ onZoomIn, onZoomOut }) {
  return (
    <div className="controls">
      <button onClick={onZoomIn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <button onClick={onZoomOut}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
}

export default MapControls;
