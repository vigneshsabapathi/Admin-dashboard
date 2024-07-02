import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const SuperUserDashboard = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <h1>Super User Dashboard</h1>
            {/* Add the rest of the dashboard content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperUserDashboard;
