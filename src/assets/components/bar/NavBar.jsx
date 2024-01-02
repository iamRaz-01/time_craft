import "../../css/bar/navbar.css";
import { HomePageSearchSideBarInput } from "./HomePageSideBarSearchInput.jsx";
import { HomePageSideBarContent } from "./HomePageSideBarContent.jsx";
const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-inside-div-container">
        <HomePageSearchSideBarInput />
        <HomePageSideBarContent />
      </div>
    </div>
  );
};
export { NavBar };
