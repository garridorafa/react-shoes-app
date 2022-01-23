import React from "react";

import "./Button.css";

export default function Button({ label, disabled, onClick }) {
  return (
    <button className="btn btn-primary" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
