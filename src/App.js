import { SignUp } from "./assets/components/SignUp.jsx";
import { SignIn } from "./assets/components/SignIn.jsx";
import { HomeSideBar } from "./assets/components/HomeSideBar.jsx";
import { HomeProfileAndAddTaskNavBar } from "./assets/components/HomeProfileAndAddTaskNavBar.jsx";
import { useState } from "react";

function App() {
  const pages = [
    <SignUp onPageChange={() => setPageIndex(1)} />,
    <SignIn onPageChange={() => setPageIndex(2)} />,
    <HomeSideBar />,
  ];
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div>
      {pages[pageIndex]} <HomeProfileAndAddTaskNavBar />
    </div>
  );
}

export default App;
