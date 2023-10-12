import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardHome from "pages/dashboard/DashboardHome";
import ConstructionStatus from "pages/dashboard/construction-status/ConstructionStatus";
import ProgressInSWM from "pages/dashboard/progress-swm/ProgressInSWM";
import SWMProjectStatus from "pages/dashboard/swm-projects-status/SWMProjectStatus";
import SWMProjectStatusDecentralized from "pages/dashboard/swm-projects-status-decentralised/SWMProjectStatusDecentralised";
import FundStatus from "pages/dashboard/fund-status/FundStatus";
import AppStatus from "pages/dashboard/app-update/AppStatus";
import KeyUpdates from "pages/dashboard/key-updates/KeyUpdates";
import StatesUTsProgress from "pages/dashboard/states-progress/StatesUTsProgress";

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
            <Route path="funds-status" element={<FundStatus />} />
            <Route path="key-updates" element={<KeyUpdates />} />
            <Route
              path="states-and-uts-progress"
              element={<StatesUTsProgress />}
            />
            <Route path="app-updates" element={<AppStatus />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
