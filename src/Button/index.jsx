import React from "react";

import "./Button.css";

export default function Button({ label, disabled, onClick, primary = false }) {
  return (
    <button
      className={`btn ${primary && "btn-primary"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
