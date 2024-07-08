import React, { useState, useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const AuditMaster = () => {
  const navigate = useNavigate();

  const data = [
    {
      auditId: "AUDIT12345",
      tenantId: "TENANT001",
      timestamp: "2024-01-01 12:00:00",
      action: "Login",
      ipAddress: "192.168.1.1",
      userId: "user1@example.com",
    },
    {
      auditId: "AUDIT67890",
      tenantId: "TENANT002",
      timestamp: "2024-01-02 14:30:00",
      action: "Update Profile",
      ipAddress: "192.168.1.2",
      userId: "user2@example.com",
    },
    {
      auditId: "AUDIT11223",
      tenantId: "TENANT003",
      timestamp: "2024-01-03 09:15:00",
      action: "Logout",
      ipAddress: "192.168.1.3",
      userId: "user3@example.com",
    },
    {
      auditId: "AUDIT44556",
      tenantId: "TENANT001",
      timestamp: "2024-01-04 16:45:00",
      action: "Create Document",
      ipAddress: "192.168.1.4",
      userId: "user4@example.com",
    },
    {
      auditId: "AUDIT77889",
      tenantId: "TENANT002",
      timestamp: "2024-01-05 11:30:00",
      action: "Delete Record",
      ipAddress: "192.168.1.5",
      userId: "user5@example.com",
    },
  ];

  const [selectedRow, setSelectedRow] = useState(0);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    // By default, the first row is selected
    setSelectedRow(0);
  }, []);

  const totalAudits = data.length;
  const uniqueTenants = [...new Set(data.map((item) => item.tenantId))].length;
  const uniqueActions = [...new Set(data.map((item) => item.action))].length;
  const uniqueUsers = [...new Set(data.map((item) => item.userId))].length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Audit Master</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/audit-master/add")}
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Audits</h2>
          <p className="text-2xl font-bold">{totalAudits}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Tenants</h2>
          <p className="text-2xl font-bold">{uniqueTenants}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Actions</h2>
          <p className="text-2xl font-bold">{uniqueActions}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Users</h2>
          <p className="text-2xl font-bold">{uniqueUsers}</p>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Audit Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IP Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className={`cursor-pointer ${
                  selectedRow === index ? "bg-gray-100" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.auditId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tenantId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.action}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.ipAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.userId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="flex items-center text-blue-500 hover:text-blue-700">
                    <PencilAltIcon className="h-5 w-5 mr-1" />
                    Modify
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="flex items-center text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5 mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-white shadow sm:rounded-lg">
        <h2 className="text-xl font-bold mb-4">Selected Audit Details</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Audit Id
              </label>
              <input
                type="text"
                value={data[selectedRow].auditId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant Id
              </label>
              <input
                type="text"
                value={data[selectedRow].tenantId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Timestamp
              </label>
              <input
                type="text"
                value={data[selectedRow].timestamp}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Action
              </label>
              <input
                type="text"
                value={data[selectedRow].action}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                IP Address
              </label>
              <input
                type="text"
                value={data[selectedRow].ipAddress}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Id
              </label>
              <input
                type="text"
                value={data[selectedRow].userId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuditMaster;
