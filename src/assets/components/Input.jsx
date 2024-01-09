import React, { useState } from "react";
import "../css/sign.css";

const Input = ({ properties, invalid }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputType =
    properties.type === "password"
      ? passwordVisible
        ? "text"
        : "password"
      : properties.type;
  const eyeIconClass = passwordVisible ? "bi bi-eye-slash" : "bi bi-eye";

  const inputClassName = invalid ? "invalid-input-div" : "valid-input-div";

  return (
    <div className="input-container">
      <div className="input-inside-container">
        <div className={inputClassName}>
          <div className="property-icon-div">
            <span id="property-icon" className="material-symbols-outlined">
              {properties.icon}
            </span>
          </div>
          <div className="input-and-password-icon-div">
            <div className="input-main-div">
              <input
                className="input"
                type={inputType}
                placeholder={properties.place}
                pattern={properties.pattern}
                title={properties.title || ""}
                onChange={(e) => {
                  properties.event(e.target.value);
                }}
                required
              />
            </div>
            {properties.type === "password" && (
              <div className="password-icon-div">
                <i
                  id="password-icon"
                  className={eyeIconClass}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            )}
          </div>
        </div>

        {invalid && (
          <div className="error-message-div-container">
            <div className="error-message-inside-div invalid">
              <i className="bi bi-exclamation-circle"></i>
              <span className="error-message-span">
                {properties.invalidMessage}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Input };
