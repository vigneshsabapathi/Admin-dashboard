// src/pages/SystemSettings.jsx
import React, { useState } from "react";

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState("GeneralDetails");
  const [activeAdminTab, setActiveAdminTab] = useState("GeneralDetails");

  const renderForm = (tab) => {
    switch (tab) {
      case "GeneralDetails":
        return (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="John Doe"
                disabled
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" id="changeName" className="mr-2" />
                <label htmlFor="changeName" className="text-sm text-gray-600">
                  Change Name
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="johndoe"
                disabled
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" id="changeUsername" className="mr-2" />
                <label
                  htmlFor="changeUsername"
                  className="text-sm text-gray-600"
                >
                  Change Username
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                disabled
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" id="changePassword" className="mr-2" />
                <label
                  htmlFor="changePassword"
                  className="text-sm text-gray-600"
                >
                  Change Password
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                rows="3"
              ></textarea>
            </div>
          </form>
        );
      case "UserPermissions":
        return (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Role
              </label>
              <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Permissions
              </label>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="read" className="mr-2" />
                <label htmlFor="read" className="text-sm text-gray-600">
                  Read
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="write" className="mr-2" />
                <label htmlFor="write" className="text-sm text-gray-600">
                  Write
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="delete" className="mr-2" />
                <label htmlFor="delete" className="text-sm text-gray-600">
                  Delete
                </label>
              </div>
            </div>
          </form>
        );
      case "Plans":
        return (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Current Plan
              </label>
              <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                <option>Free</option>
                <option>Basic</option>
                <option>Pro</option>
                <option>Enterprise</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Billing Cycle
              </label>
              <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </form>
        );
      case "Notifications":
        return (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Notifications
              </label>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="emailUpdates" className="mr-2" />
                <label htmlFor="emailUpdates" className="text-sm text-gray-600">
                  Receive email updates
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="emailPromotions" className="mr-2" />
                <label
                  htmlFor="emailPromotions"
                  className="text-sm text-gray-600"
                >
                  Receive promotional emails
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                SMS Notifications
              </label>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="smsUpdates" className="mr-2" />
                <label htmlFor="smsUpdates" className="text-sm text-gray-600">
                  Receive SMS updates
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="smsPromotions" className="mr-2" />
                <label
                  htmlFor="smsPromotions"
                  className="text-sm text-gray-600"
                >
                  Receive promotional SMS
                </label>
              </div>
            </div>
          </form>
        );
      case "ThemePreferences":
        return (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Theme
              </label>
              <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </form>
        );
      case "Language":
        return (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Chinese</option>
              </select>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">System Settings</h1>
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="flex">
          <nav className="w-1/4 pr-4">
            <ul className="space-y-2">
              <li>
                <button
                  className={`text-left w-full ${
                    activeTab === "GeneralDetails"
                      ? "text-blue-600"
                      : "text-gray-600"
                  } focus:outline-none`}
                  onClick={() => setActiveTab("GeneralDetails")}
                >
                  General Details
                </button>
              </li>
              <li>
                <button
                  className={`text-left w-full ${
                    activeTab === "UserPermissions"
                      ? "text-blue-600"
                      : "text-gray-600"
                  } focus:outline-none`}
                  onClick={() => setActiveTab("UserPermissions")}
                >
                  User Permissions
                </button>
              </li>
              <li>
                <button
                  className={`text-left w-full ${
                    activeTab === "Plans" ? "text-blue-600" : "text-gray-600"
                  } focus:outline-none`}
                  onClick={() => setActiveTab("Plans")}
                >
                  Plans
                </button>
              </li>
              <li>
                <button
                  className={`text-left w-full ${
                    activeTab === "Notifications"
                      ? "text-blue-600"
                      : "text-gray-600"
                  } focus:outline-none`}
                  onClick={() => setActiveTab("Notifications")}
                >
                  Notifications
                </button>
              </li>
              <li>
                <button
                  className={`text-left w-full ${
                    activeTab === "ThemePreferences"
                      ? "text-blue-600"
                      : "text-gray-600"
                  } focus:outline-none`}
                  onClick={() => setActiveTab("ThemePreferences")}
                >
                  Theme Preferences
                </button>
              </li>
              <li>
                <button
                  className={`text-left w-full ${
                    activeTab === "Language" ? "text-blue-600" : "text-gray-600"
                  } focus:outline-none`}
                  onClick={() => setActiveTab("Language")}
                >
                  Language
                </button>
              </li>
            </ul>
          </nav>
          <div className="w-3/4">{renderForm(activeTab)}</div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Admin Settings</h1>
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="flex flex-col">
          <nav className="flex space-x-4">
            <button
              className={`text-left ${
                activeAdminTab === "GeneralDetails"
                  ? "text-blue-600"
                  : "text-gray-600"
              } focus:outline-none`}
              onClick={() => setActiveAdminTab("GeneralDetails")}
            >
              General Details
            </button>
            <button
              className={`text-left ${
                activeAdminTab === "UserPermissions"
                  ? "text-blue-600"
                  : "text-gray-600"
              } focus:outline-none`}
              onClick={() => setActiveAdminTab("UserPermissions")}
            >
              User Permissions
            </button>
            <button
              className={`text-left ${
                activeAdminTab === "Plans" ? "text-blue-600" : "text-gray-600"
              } focus:outline-none`}
              onClick={() => setActiveAdminTab("Plans")}
            >
              Plans
            </button>
            <button
              className={`text-left ${
                activeAdminTab === "Notifications"
                  ? "text-blue-600"
                  : "text-gray-600"
              } focus:outline-none`}
              onClick={() => setActiveAdminTab("Notifications")}
            >
              Notifications
            </button>
            <button
              className={`text-left ${
                activeAdminTab === "ThemePreferences"
                  ? "text-blue-600"
                  : "text-gray-600"
              } focus:outline-none`}
              onClick={() => setActiveAdminTab("ThemePreferences")}
            >
              Theme Preferences
            </button>
            <button
              className={`text-left ${
                activeAdminTab === "Language"
                  ? "text-blue-600"
                  : "text-gray-600"
              } focus:outline-none`}
              onClick={() => setActiveAdminTab("Language")}
            >
              Language
            </button>
          </nav>
          <div className="mt-4">{renderForm(activeAdminTab)}</div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
