import { useState } from "react";
import "../../css/addTask/DropDown.css"
import Tag from "../../../api/Tag";

const DropDown = ({
  dropDownFor,
  options,
  isOpen,
  openOptions,
  hangleSelectedTagOption,
  handleSelectedPriorityOption,
}) => {
  const [tagValue, setTagValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('');
  const [editing, setEditing] = useState(false);
  const [editTagValue, setEditTagValue] = useState("");

  const handleTagClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setEditTagValue(e.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  const handleEnterKeyPress = async (e) => {
    if (e.key === "Enter") {
      setTagValue(editTagValue);
      const tag = new Tag();
      await tag.createTag(editTagValue);
      setEditTagValue("");
      setEditing(false);
    }
  };

  const handleSetTagValue = (value) => {
    setTagValue(value);
  };

  const handleSetPriorityValue = (value) => {
    setPriorityValue(value);
  };

  const handleItemClick = (item) => {
    if (dropDownFor === "Select a Tag") {
      handleSetTagValue(item.tag_name);
      hangleSelectedTagOption(item.tag_name);
    } else {
      handleSetPriorityValue(item.tag_name);
      handleSelectedPriorityOption(item.tag_name);
    }
    openOptions();
  };
  return (
    <div className="tag-details-showing-div">
      <div className="tag-details-showing-inside-div">
        <div className="tag-side-head">
          <p>{dropDownFor}</p>
        </div>
        <div className="custom-dropdown-div">
          <div className="custom-dropdown">
            <input
              type="text"
              placeholder="Select a tag"
              value={dropDownFor === "Select a Tag" ? tagValue : priorityValue}
              readOnly
            />
            <span className="dropdown-icon" onClick={openOptions}>
              {isOpen ? "▲" : "▼"}
            </span>
          </div>
          {/* drop down options */}
          {isOpen === true ? (
            <div className="dropdown-options">
              <div className="dropdown-options-inside-div">
                {/* tag options showing div */}
                <div className="add-tag-head-div-container">
                  <div className="add-tag-inside-div">
                    <p className="add-tag-para">Choose a tag for this task</p>
                  </div>
                </div>
                {/* search bar search the tags */}
                <div className="tag-search-bar-container">
                  <div className="tag-search-bar-inside-div">
                    <input
                      className="tag-search-bar tag-search-input"
                      type="text"
                    />
                  </div>
                </div>
                {/* tag showing div */}

                <div className="tag-options-showing-div-container">
                  <div className="tag-options-showing-inside-div">
                    {options.length > 0 ? (
                      options.map((item, index) => (
                        <div
                          className="options-div"
                          key={index}
                          onClick={() => handleItemClick(item)}
                        >
                          <div className="options-inside-div">
                            <i className={item.icon}></i>
                            <p className="options-para">{item.tag_name}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="options-para">No tags are available</p>
                    )}
                  </div>
                </div>

                {/* create custom tag */}
                <div className="create-new-tag-div-container">
                  {editing ? (
                    <div className="create-new-tag-inside-div">
                      <input
                        id="tag-creation-input"
                        type="text"
                        placeholder="Enter tag name"
                        value={editTagValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyPress={handleEnterKeyPress}
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div
                      className="create-new-tag-inside-div"
                      onDoubleClick={handleTagClick}
                    >
                      <p className="create-new-tag-para">
                        <i className="bi bi-pencil"></i> Create custom Tag
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export { DropDown };
