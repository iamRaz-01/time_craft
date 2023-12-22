// import { SignUp } from "./assets/components/SignUp.jsx";
import { Dashboard } from "./assets/components/dashboard/Dashboard.jsx";
import './api/User.js';
import './assets/css/app.css';
import { NavBar } from "./assets/components/NavBar.jsx";

function App() {
  // const pages = [<SignUp onPageChange={() => setPageIndex(1)} />, <SignIn />];
  // const [pageIndex, setPageIndex] = useState(0);
  // return <div>{pages[pageIndex]}</div>;
  return (
    <div className='app'>
      <NavBar />
      <Dashboard />

    </div>

  )
}

export default App;
