import "../css/sign.css";
const Input = ({ properties, invalid }) => {
  const inputClassName = invalid ? "invalid-input-div" : "valid-input-div";

  return (
    <div className="input-container">
      <div className="input-inside-container">
        <div className={inputClassName}>
          <span className="material-symbols-outlined">{properties.icon}</span>
          <input
            className="input"
            type={properties.type}
            placeholder={properties.place}
            pattern={properties.pattern}
            title={properties.title || ""}
            onChange={(e) => {
              properties.event(e.target.value);
            }}
          />
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
