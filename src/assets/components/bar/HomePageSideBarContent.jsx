import { useState } from "react";
import "../../css/bar/HomePageSideBarContent.css";
const sidebarContent = [
  { content: "Dashboard", icon: "bi bi-house-door" },
  { content: "Schedule", icon: "bi bi-calendar2-minus" },
  { content: "Chat", icon: "bi bi-chat-dots" },
  { content: "Acticity", icon: "bi bi-activity" },
  { content: "Setting", icon: "bi bi-sliders" },
];

const HomePageSideBarContent = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleItemClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div id="home-page-side-bar-content-div-container">
      <div className="home-page-side-bar-content-inside-div">
        <div className="over-view-head-div">
          <h3>Overview</h3>
        </div>

        <div className="side-bar-content-div">
          <div className="side-bar-content-inside-div">
            {sidebarContent.map((item, index) => (
              <div
                className={`content-div ${
                  index === clickedIndex ? "clicked" : ""
                }`}
                key={index}
                onClick={() => handleItemClick(index)}
              >
                <div className="content-inside-div">
                  <i className={item.icon}></i>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export { HomePageSideBarContent };
