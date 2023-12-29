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

export { Input };
