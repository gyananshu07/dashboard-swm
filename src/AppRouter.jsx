import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ODFGFCStatus from "pages/dashboard/odf-gfc-status/ODF_GFC_Status";
import DashboardHome from "pages/dashboard/DashboardHome";
import ConstructionStatus from "pages/dashboard/construction-status/ConstructionStatus";

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
            <Route path="progress-swm" />
            <Route path="swm-projects-status" />
            <Route path="swm-projects-status-decentralized" />
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
