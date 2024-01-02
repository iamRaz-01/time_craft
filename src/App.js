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
import { Schedule } from "./assets/components/schedule/Schedule.jsx";
import { Chat } from "./assets/components/chat/Chat.jsx";
import { Activity } from "./assets/components/activity/Activity.jsx";
import { Setting } from "./assets/components/setting/Setting.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/setting" element={<Setting />} />
        <Route index element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
