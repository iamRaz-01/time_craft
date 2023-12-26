import "../css/navbar.css";
import { HomePageSearchSideBarInput } from "../components/dashboard/HomePageSideBarSearchInput.jsx";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <HomePageSearchSideBarInput />
    </div>
  );
};
export { NavBar };
