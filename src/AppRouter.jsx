import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardHome from "pages/dashboard/DashboardHome";
import ConstructionStatus from "pages/dashboard/construction-status/ConstructionStatus";
import ProgressInSWM from "pages/dashboard/progress-swm/ProgressInSWM";
import SWMProjectStatus from "pages/dashboard/swm-projects-status/SWMProjectStatus";
import SWMProjectStatusDecentralized from "pages/dashboard/swm-projects-status-decentralised/SWMProjectStatusDecentralised";

function AppRouter() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact path="/">
            <Route index element={<DashboardHome />} />
            <Route
              path="construction-status"
              element={<ConstructionStatus />}
            />
            <Route path="progress-swm" element={<ProgressInSWM />} />
            <Route path="swm-projects-status" element={<SWMProjectStatus />} />
            <Route
              path="swm-projects-status-decentralized"
              element={<SWMProjectStatusDecentralized />}
            />
            <Route path="funds-status" />
            <Route path="key-updates" />
            <Route path="states-and-uts-progress" />
            <Route path="app-updates" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
