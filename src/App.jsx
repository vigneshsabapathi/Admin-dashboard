import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TenantMaster from "./pages/TenantMaster";
import SubscriptionMaster from "./pages/SubscriptionMaster";
import AuditMaster from "./pages/AuditMaster";
import TenantConfiguration from "./pages/TenantConfiguration";
import TenantSupport from "./pages/TenantSupport";
import TenantAdminAudit from "./pages/TenantAdminAudit";
import SchedulerForms from "./pages/SchedulerForms";
import TenantForms from "./components/TenantForms";
import SubscriptionForm from "./components/SubscriptionForm";
import AuditForm from "./components/AuditForm";
import TenantConfigurationForm from "./components/TenantConfigurationForm";
import TenantSupportForm from "./components/TenantSupportForm";
import TenantAdminAuditForm from "./components/TenantAdminAuditForm";
import SchedulerForm from "./components/SchedulerForm";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import ActivityLog from "./pages/ActivityLog";
import DataGrid from "./pages/DataGrid";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

const Main = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen">
      {user && <Sidebar />}
      <div className="flex-1">
        {user && <Navbar />}
        <div className="p-4">
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Login />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Login />}
            />
            <Route
              path="/tenant-master"
              element={user ? <TenantMaster /> : <Login />}
            />
            <Route
              path="/tenant-master/add"
              element={user ? <TenantForms /> : <Login />}
            />
            <Route
              path="/subscription-master"
              element={user ? <SubscriptionMaster /> : <Login />}
            />
            <Route
              path="/subscription-master/add"
              element={user ? <SubscriptionForm /> : <Login />}
            />
            <Route
              path="/audit-master"
              element={user ? <AuditMaster /> : <Login />}
            />
            <Route
              path="/audit-master/add"
              element={user ? <AuditForm /> : <Login />}
            />
            <Route
              path="/tenant-configuration"
              element={user ? <TenantConfiguration /> : <Login />}
            />
            <Route
              path="/tenant-configuration/add"
              element={user ? <TenantConfigurationForm /> : <Login />}
            />
            <Route
              path="/tenant-support"
              element={user ? <TenantSupport /> : <Login />}
            />
            <Route
              path="/tenant-support/add"
              element={user ? <TenantSupportForm /> : <Login />}
            />
            <Route
              path="/tenant-admin-audit"
              element={user ? <TenantAdminAudit /> : <Login />}
            />
            <Route
              path="/tenant-admin-audit/add"
              element={user ? <TenantAdminAuditForm /> : <Login />}
            />
            <Route
              path="/scheduler-forms"
              element={user ? <SchedulerForms /> : <Login />}
            />
            <Route
              path="/scheduler-forms/add"
              element={user ? <SchedulerForm /> : <Login />}
            />
            <Route path="/dbgrid" element={user ? <DataGrid /> : <Login />} />
            <Route path="/settings" element={user ? <Settings /> : <Login />} />
            <Route path="/profile" element={user ? <Profile /> : <Login />} />
            <Route
              path="/activity-log"
              element={user ? <ActivityLog /> : <Login />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
