// import { SignUp } from "./assets/components/SignUp.jsx";
import { Dashboard } from "./assets/components/dashboard/Dashboard.jsx";
import "./assets/css/app.css";
import { useState } from "react";
import { SignIn } from "./assets/components/SignIn.jsx";
import { SignUp } from "./assets/components/SignUp.jsx";

function App() {
  const pages = [
    <SignUp onPageChange={() => setPageIndex(1)} />,
    <SignIn onPageChange={() => setPageIndex(2)} />,
    <Dashboard />,
  ];
  const [pageIndex, setPageIndex] = useState(0);
  return <div className="app">{pages[pageIndex]}</div>;
}

export default App;
