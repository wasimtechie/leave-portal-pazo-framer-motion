import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Events from "./containers/Events";
import Notification from "./containers/Notification";
import Settings from "./containers/Settings";
import SideBar from "./components/SideBar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </SideBar>
    </Router>
  );
};

export default App;
