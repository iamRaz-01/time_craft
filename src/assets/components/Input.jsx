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

const DropDown = ({ name, dropDownFor, options, setNewTaskTag }) => {
  const [creatingNewTag, setCreatingNewTag] = useState(false);
  const [newTagName, setNewTagName] = useState("");

  const handleCreateNewTag = () => {
    setCreatingNewTag(true);
  };

  const handleBlur = () => {
    setCreatingNewTag(false);
    if (newTagName) {
      setNewTaskTag(newTagName);
    }
    setNewTagName(""); 
  };

  const handleInputChange = (e) => {
    setNewTagName(e.target.value);
  };

  return (
    <div className="input-div">
      <p>{dropDownFor}</p>

      <select name={name} className="select">
        {options.map((item) => (
          <option
            key={item.priority || item}
            value={item.priority || item}
            className="options"
          >
            {item.priority && <i className={item.icon}></i>}
            <span className="tag-content-span">{item.priority || item}</span>
          </option>
        ))}
        <option
          value="create new tag"
          className="options"
          onClick={() => handleCreateNewTag()}
        >
          Create New Tag
        </option>
        {creatingNewTag && (
          <div>
            <input
              type="text"
              name={name}
              className="select"
              placeholder="Enter new tag"
              value={newTagName}
              onChange={handleInputChange}
            />
            <button onClick={handleBlur}>OK</button>
          </div>
        )}
      </select>
    </div>
  );
};

export { Input, DropDown };