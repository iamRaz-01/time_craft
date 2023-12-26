import "../css/navbar.css";
import { HomePageSearchSideBarInput } from "../components/dashboard/HomePageSideBarSearchInput.jsx";
import { HomePageSideBarContent } from "../components/dashboard/HomePageSideBarContent.jsx";
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
