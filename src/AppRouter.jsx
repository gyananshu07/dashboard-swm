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
import Scrollbars from "react-custom-scrollbars";

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
      <Router>
        <DashboardLayout onPrint={handlePrint}>
          <Routes>
            <Route exact path="/">
              <Route
                index
                element={
                  <Printable ref={componentRef}>
                    <DashboardHome />
                  </Printable>
                }
              />
              <Route
                path="construction-status"
                element={
                  <Printable ref={componentRef}>
                    <ConstructionStatus />
                  </Printable>
                }
              />
              <Route
                path="progress-swm"
                element={
                  <Printable ref={componentRef}>
                    <ProgressInSWM />
                  </Printable>
                }
              />
              <Route
                path="swm-projects-status"
                element={
                  <Printable ref={componentRef}>
                    <SWMProjectStatus />
                  </Printable>
                }
              />
              <Route
                path="swm-projects-status-decentralized"
                element={
                  <Printable ref={componentRef}>
                    <SWMProjectStatusDecentralized />
                  </Printable>
                }
              />
              <Route
                path="funds-status"
                element={
                  <Printable ref={componentRef}>
                    <FundStatus />
                  </Printable>
                }
              />
              <Route
                path="key-updates"
                element={
                  <Printable ref={componentRef}>
                    <KeyUpdates />
                  </Printable>
                }
              />
              <Route
                path="states-and-uts-progress"
                element={
                  <Printable ref={componentRef}>
                    <StatesUTsProgress />
                  </Printable>
                }
              />
              <Route
                path="app-updates"
                element={
                  <Printable ref={componentRef}>
                    <AppStatus ref={componentRef} />
                  </Printable>
                }
              />
            </Route>
          </Routes>
        </DashboardLayout>
      </Router>
    </>
  );
}

export default AppRouter;
