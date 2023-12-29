import { useState } from "react";
import "../css/sign.css";

const Input = ({ properties }) => {
  return (
    <div className="input-div">
      <span className="material-symbols-outlined">{properties.icon}</span>
      <input
        type={properties.type}
        placeholder={properties.place}
        pattern={properties.pattern}
        title={properties.title || ""}
        onChange={(e) => {
          properties.event(e.target.value);
        }}
      />
    </div>
  );
};

const DropDown = ({ name, dropDownFor, options }) => {
  return (
    <div className="input-div">
      <p>{dropDownFor}</p>
      <select name={name}>
        {dropDownFor === "Priority"
          ? options.map((item) => (
              <option key={item.priority} value={item.priority}>
                <i className={item.icon}></i>
                <span>{item.priority}</span>
              </option>
            ))
          : options.map((item) => (
              <option key={item} value={item}>
                <span className="material-icons-outlined">library_add</span>
                {item}
              </option>
            ))}
      </select>
    </div>
  );
};
export { Input, DropDown };
