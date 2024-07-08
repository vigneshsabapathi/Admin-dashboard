import React, { useState, useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const TenantConfiguration = () => {
  const navigate = useNavigate();

  const data = [
    {
      configId: "CONFIG12345",
      tenantId: "TENANT001",
      address: "123 Main St, City A, Country X",
      adminEmailId: "admin1@example.com",
      adminMobile: "123-456-7890",
      configCategory: "General",
    },
    {
      configId: "CONFIG67890",
      tenantId: "TENANT002",
      address: "456 Elm St, City B, Country Y",
      adminEmailId: "admin2@example.com",
      adminMobile: "234-567-8901",
      configCategory: "Security",
    },
    {
      configId: "CONFIG11223",
      tenantId: "TENANT003",
      address: "789 Oak St, City C, Country Z",
      adminEmailId: "admin3@example.com",
      adminMobile: "345-678-9012",
      configCategory: "Billing",
    },
    {
      configId: "CONFIG44556",
      tenantId: "TENANT004",
      address: "101 Pine St, City D, Country W",
      adminEmailId: "admin4@example.com",
      adminMobile: "456-789-0123",
      configCategory: "General",
    },
    {
      configId: "CONFIG77889",
      tenantId: "TENANT005",
      address: "202 Cedar St, City E, Country V",
      adminEmailId: "admin5@example.com",
      adminMobile: "567-890-1234",
      configCategory: "Security",
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

  const totalConfigurations = data.length;
  const uniqueTenants = [...new Set(data.map((item) => item.tenantId))].length;
  const uniqueCategories = [...new Set(data.map((item) => item.configCategory))]
    .length;
  const uniqueAdmins = [...new Set(data.map((item) => item.adminEmailId))]
    .length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tenant Configuration</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/tenant-configuration/add")}
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Total Configurations
          </h2>
          <p className="text-2xl font-bold">{totalConfigurations}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Tenants</h2>
          <p className="text-2xl font-bold">{uniqueTenants}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Configuration Categories
          </h2>
          <p className="text-2xl font-bold">{uniqueCategories}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Admins</h2>
          <p className="text-2xl font-bold">{uniqueAdmins}</p>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Config ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin Mobile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Config Category
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
                  {item.configId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tenantId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.adminEmailId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.adminMobile}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.configCategory}
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
          Selected Configuration Details
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Config ID
              </label>
              <input
                type="text"
                value={data[selectedRow].configId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant ID
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
                Address
              </label>
              <input
                type="text"
                value={data[selectedRow].address}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Admin Email
              </label>
              <input
                type="text"
                value={data[selectedRow].adminEmailId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Admin Mobile
              </label>
              <input
                type="text"
                value={data[selectedRow].adminMobile}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Config Category
              </label>
              <input
                type="text"
                value={data[selectedRow].configCategory}
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

export default TenantConfiguration;
