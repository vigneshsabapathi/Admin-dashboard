// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
  FolderIcon,
  CalendarIcon,
  ChartBarIcon,
  InboxIcon,
  PencilAltIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 text-white w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-2xl font-bold">Company</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <Link
          to="/dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <HomeIcon className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/tenant-master"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <UsersIcon className="h-5 w-5 mr-3" />
          Tenant Master
        </Link>
        <Link
          to="/subscription-master"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <ShoppingCartIcon className="h-5 w-5 mr-3" />
          Subscription Master
        </Link>
        <Link
          to="/audit-master"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <FolderIcon className="h-5 w-5 mr-3" />
          Audit Master
        </Link>
        <Link
          to="/tenant-configuration"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <CalendarIcon className="h-5 w-5 mr-3" />
          Tenant Configuration
        </Link>
        <Link
          to="/tenant-support"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <ChartBarIcon className="h-5 w-5 mr-3" />
          Tenant Support
        </Link>
        <Link
          to="/tenant-admin-audit"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <InboxIcon className="h-5 w-5 mr-3" />
          Tenant Admin Audit
        </Link>
        <Link
          to="/scheduler-forms"
          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
        >
          <PencilAltIcon className="h-5 w-5 mr-3" />
          Scheduler Forms
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
