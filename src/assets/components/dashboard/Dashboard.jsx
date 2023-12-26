import "../../css/dashboard/dashboard.css";
import { Header } from "./Header";
import { NavBar } from "../NavBar.jsx";
import { HomeBodyContent } from "../HomeBodyContent.jsx";
import { useState } from "react";
function Dashboard() {
  const [contentLayout, setContentLayout] = useState(0);

  return (
    <div className="dashboard">
      <NavBar />
      <div className="home-nav-and-body-content-div">
        <Header onContentChange={() => setContentLayout(1)} />
        <HomeBodyContent contentLayout={contentLayout} />
      </div>
    </div>
  );
}

export { Dashboard };