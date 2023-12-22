import { SignUp } from "./assets/components/SignUp.jsx";
import { SignIn } from "./assets/components/SignIn.jsx";
import { useState } from "react";

function App() {
  const pages = [<SignUp onPageChange={() => setPageIndex(1)} />, <SignIn />];
  const [pageIndex, setPageIndex] = useState(0);

  return <div>{pages[pageIndex]}</div>;
}

export default App;
