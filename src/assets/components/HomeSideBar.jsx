import { HomeSideBarSearchBar } from "./HomeSideBarSearchBar";
import "../css/HomeSideBar.css"
const HomeSideBar = () => {
  return (
    <div id="home-side-bar">
      <div className="home-side-bar-inside-div">
        {/* Search bar div components */}
        <HomeSideBarSearchBar />
        {/* Content div */}

        <div className="home-page-content-page-container">
          <div className="home-page-content-page-inside-div">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeSideBar };
