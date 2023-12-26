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

const DropDown = (props) => {
  return (
    <div className="input-div">
      <p> Give a Tag</p>
      <select name={props.name}>
        <option value=""> select </option>
      </select>
    </div>
  );
};
export { Input, DropDown };
