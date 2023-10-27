import React, { forwardRef, useRef } from "react";
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
import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import { useReactToPrint } from "react-to-print";
import LoginHome from "pages/admin/login/LoginHome";
import HomePage from "pages/home/HomePage";

import "leaflet/dist/leaflet.css";

const Printable = forwardRef(function (props, ref) {
  return <div ref={ref}>{props.children}</div>;
});

function AppRouter() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
    pageStyle: `@media print {
      @page {
        size: landscape;
        margin: 0 !important;
        padding:0 !important;
        flex: 1 !important;
        width: 100% !important;
        height: 100vh !important;
      }
      body {
        display: flex;
        flex: 1 !important;
        justify-content: center;
        align-items: center;
        width: 100% !important;
        height: 100vh !important;
        margin: 0 !important;
        padding:0 !important;
      }
    }`,
  });
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact>
            <Route index element={<LoginHome />} />
            <Route path="home" element={<HomePage />} />
            <Route exact path="dashboard">
              <Route
                index
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <DashboardHome />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="construction-status"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <ConstructionStatus />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="progress-swm"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <ProgressInSWM />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="swm-projects-status"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <SWMProjectStatus />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="swm-projects-status-decentralized"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <SWMProjectStatusDecentralized />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="funds-status"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <FundStatus />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="key-updates"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <KeyUpdates />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="states-and-uts-progress"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <StatesUTsProgress />
                    </Printable>
                  </DashboardLayout>
                }
              />
              <Route
                path="app-updates"
                element={
                  <DashboardLayout onPrint={handlePrint}>
                    <Printable ref={componentRef}>
                      <AppStatus ref={componentRef} />
                    </Printable>
                  </DashboardLayout>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
