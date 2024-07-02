import React from "react";
import { Menu } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  CogIcon,
  ViewListIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { useAuth } from "../contexts/AuthContext";
import avatar from "../images/avatar.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-xl font-bold text-gray-900">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-md"
              />
            </div>
            <Menu as="div" className="ml-4 relative">
              <Menu.Button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300">
                <img
                  className="h-8 w-8 rounded-full"
                  src={avatar}
                  alt="User avatar"
                />
              </Menu.Button>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center px-4 py-2 text-sm text-gray-700`}
                    >
                      <UserCircleIcon className="w-5 h-5 mr-3" />
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center px-4 py-2 text-sm text-gray-700`}
                    >
                      <CogIcon className="w-5 h-5 mr-3" />
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/activity-log"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center px-4 py-2 text-sm text-gray-700`}
                    >
                      <ViewListIcon className="w-5 h-5 mr-3" />
                      Activity Log
                    </Link>
                  )}
                </Menu.Item>
                <div className="border-t border-gray-100"></div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                    >
                      <LogoutIcon className="w-5 h-5 mr-3" />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
