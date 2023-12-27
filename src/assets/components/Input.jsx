import "../css/sign.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";

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
              {item.priority}
            </option>
          ))
          : options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export { Input, DropDown };
