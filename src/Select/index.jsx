import React from "react";

import "./Select.css";

export default function Select({ label, choices }) {
  return (
    <select className="select" id="">
      <option value="">{label}</option>
      {choices.map((choice) => (
        <option className="select option" value={choice.id}>
          {choice.name}
        </option>
      ))}
    </select>
  );
}
