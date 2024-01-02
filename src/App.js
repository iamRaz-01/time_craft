import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./assets/components/dashboard/Dashboard.jsx";
import { SignIn } from "./assets/components/SignIn.jsx";
import { SignUp } from "./assets/components/SignUp.jsx";
import { AddTask } from "./assets/components/addTask/AddTask.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route index element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
