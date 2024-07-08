import React, { useState, useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const SubscriptionMaster = () => {
  const navigate = useNavigate();

  const data = [
    {
      subscriptionId: "SUBS12345",
      tenantId: "TENANT001",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      subscriptionName: "Basic Plan",
      subscriptionCategory: "Category A",
    },
    {
      subscriptionId: "SUBS67890",
      tenantId: "TENANT002",
      startDate: "2024-02-01",
      endDate: "2025-01-31",
      subscriptionName: "Premium Plan",
      subscriptionCategory: "Category B",
    },
    {
      subscriptionId: "SUBS11223",
      tenantId: "TENANT003",
      startDate: "2024-03-01",
      endDate: "2025-02-28",
      subscriptionName: "Enterprise Plan",
      subscriptionCategory: "Category C",
    },
    {
      subscriptionId: "SUBS44556",
      tenantId: "TENANT004",
      startDate: "2024-04-01",
      endDate: "2025-03-31",
      subscriptionName: "Standard Plan",
      subscriptionCategory: "Category A",
    },
    {
      subscriptionId: "SUBS77889",
      tenantId: "TENANT005",
      startDate: "2024-05-01",
      endDate: "2025-04-30",
      subscriptionName: "Pro Plan",
      subscriptionCategory: "Category B",
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

  const totalSubscriptions = data.length;
  const subscriptionCategories = [
    ...new Set(data.map((item) => item.subscriptionCategory)),
  ].length;
  const activeSubscriptions = data.filter(
    (sub) => new Date(sub.endDate) > new Date()
  ).length;
  const expiringThisMonth = data.filter((sub) => {
    const endDate = new Date(sub.endDate);
    const today = new Date();
    return (
      endDate.getMonth() === today.getMonth() &&
      endDate.getFullYear() === today.getFullYear()
    );
  }).length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Subscription Master</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/subscription-master/add")}
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Total Subscriptions
          </h2>
          <p className="text-2xl font-bold">{totalSubscriptions}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Subscription Categories
          </h2>
          <p className="text-2xl font-bold">{subscriptionCategories}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Active Subscriptions
          </h2>
          <p className="text-2xl font-bold">{activeSubscriptions}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Expiring This Month
          </h2>
          <p className="text-2xl font-bold">{expiringThisMonth}</p>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscription Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscription Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscription Category
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
                  {item.subscriptionId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tenantId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.endDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.subscriptionName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.subscriptionCategory}
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
        <h2 className="text-xl font-bold mb-4">
          Selected Subscription Details
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Id
              </label>
              <input
                type="text"
                value={data[selectedRow].subscriptionId}
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
                Start Date
              </label>
              <input
                type="text"
                value={data[selectedRow].startDate}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="text"
                value={data[selectedRow].endDate}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Name
              </label>
              <input
                type="text"
                value={data[selectedRow].subscriptionName}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Category
              </label>
              <input
                type="text"
                value={data[selectedRow].subscriptionCategory}
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

export default SubscriptionMaster;
