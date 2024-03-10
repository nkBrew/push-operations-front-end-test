import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import EmployeesPage from "./pages/Employees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchedulerPage from "./pages/SchedulerPage";
import TimetrackingPage from "./pages/TimetrackingPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/scheduler" element={<SchedulerPage />} />
          <Route path="/timetracking" element={<TimetrackingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
