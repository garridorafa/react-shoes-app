import React from "react";

import "./Select.css";

export default function Select({
  id,
  label,
  choices,
  value,
  onChange,
  onBlur,
}) {
  return (
    <select
      id={id}
      className="select"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="">{label}</option>
      {choices?.map((choice) => (
        <option className="select option" value={choice.id}>
          {choice.name}
        </option>
      ))}
    </select>
  );
}
