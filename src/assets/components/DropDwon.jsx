import "../css/DropDown.css";

const DropDown = ({ dropDownFor, options, isOpen, openOptions }) => {
  return (
    <div className="tag-details-showing-div">
      <div className="tag-details-showing-inside-div">
        <div className="tag-side-head">
          <p>{dropDownFor}</p>
        </div>
        <div className="custom-dropdown-div">
          <div className="custom-dropdown">
            <input type="text" placeholder="Select a tag" />
            <span className="dropdown-icon" onClick={openOptions}>
              &#9660;
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
                        <div className="options-div" key={index}>
                          <div className="options-inside-div">
                            <i className={item.icon}></i>{" "}
                            <p className="options-para">{item.tag}</p>
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
                  <div className="create-new-tag-inside-div">
                    <p className="create-new-tag-para">
                      <i class="bi bi-pencil"></i>Create custom Tag
                    </p>
                  </div>
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
