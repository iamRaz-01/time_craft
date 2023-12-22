import { useState } from "react";
import {SignUp} from "./assets/components/SignUp";
function App() {
  const [isSign , setSign] = useState(false);
  if(isSign)alert("Successfully signed in ");
  return (
    <div>
      <SignUp event={setSign} />
      
    </div>
  );
}

export default App;
