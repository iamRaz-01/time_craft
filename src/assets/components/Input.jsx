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
          ? options.map((item, index) => (
              <option key={index} value={item.priority}>
                {item.priority}
              </option>
            ))
          : options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
      </select>
    </div>
  );
};

export { Input, DropDown };
