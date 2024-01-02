import { useState } from "react";
import "../../css/bar/HomePageSideBarContent.css";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarContent = [
  { content: "Dashboard", icon: "bi bi-house-door" },
  { content: "Schedule", icon: "bi bi-calendar2-minus" },
  { content: "Chat", icon: "bi bi-chat-dots" },
  { content: "Acticity", icon: "bi bi-activity" },
  { content: "Setting", icon: "bi bi-sliders" },
];

const HomePageSideBarContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let currentContent = location.pathname.substring(1);
  currentContent = currentContent.toLowerCase();

  const handleNavContentPageRedirection = (contentId) => {
    if (contentId === "Dashboard") {
      navigate("/dashboard");
    } else if (contentId === "Schedule") {
      navigate("/schedule");
    } else if (contentId === "Chat") {
      navigate("/chat");
    } else if (contentId === "Activity") {
      navigate("/activity");
    } else {
      navigate("/setting");
    }
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
                  currentContent === item.content.toLowerCase() ? "clicked" : ""
                }`}
                key={index}
                onClick={() => handleNavContentPageRedirection(item.content)}
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
