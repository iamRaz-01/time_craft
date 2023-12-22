import SignUp from "./components/sign/SignUp";
import { useState } from "react";

function App() {
  const [isSign , setSign] = useState(false);
  if(isSign)alert("Successfully signed in ");
  

  return (
    <div>
      <SignUp event = {setSign} />
    </div>
  );
}

export default App;
