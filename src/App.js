import SignUp from "./components/sign/SignUp";

function App() {
  const [isSign , setSign] = useState(false);
  if(isSign)alert("Successfully signed in ");
  

  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
