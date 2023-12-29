import "../../css/dashboard/dashboard.css";
import { Header } from "../bar/Header.jsx";
import { NavBar } from "../bar/NavBar.jsx";
import { HomeBodyContent } from "./HomeBodyContent.jsx";

function Dashboard() {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="home-nav-and-body-content-div">
        <Header />
        <HomeBodyContent />
      </div>
    </div>
  );
}

export { Dashboard };
