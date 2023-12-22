const Input = (props) => {
  return (
    <div className="input-div">
      <span className="material-symbols-outlined">{props.properties.icon}</span>
      <input
        type={props.properties.type}
        placeholder={props.properties.place}
        pattern={props.properties.pattern}
        title={props.properties.title}
        onChange={(e) => {
          props.properties.event(e.target.value);
        }}
      />
    </div>
  );
};
export { Input };
