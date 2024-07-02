// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {user && <p>Welcome, {user.username}</p>}
      </h1>
      {/* Empty page content */}
    </div>
  );
};

export default Dashboard;
