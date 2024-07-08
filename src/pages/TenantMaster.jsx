import React, { useState, useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const TenantMaster = () => {
  const navigate = useNavigate();

  const data = [
    {
      tenantId: "BIAL2023",
      tenantName: "Bangalore International Airport",
      adminId: "nirmal@gmail.com",
      contact: "7182785555",
      tenantCategory: "JOB",
    },
    {
      tenantId: "KIAL2023",
      tenantName: "Kempegowda International Airport",
      adminId: "john@gmail.com",
      contact: "7182785556",
      tenantCategory: "AIRPORT",
    },
    {
      tenantId: "DEL2023",
      tenantName: "Delhi International Airport",
      adminId: "david@gmail.com",
      contact: "7182785557",
      tenantCategory: "AIRPORT",
    },
    {
      tenantId: "MUM2023",
      tenantName: "Mumbai International Airport",
      adminId: "alex@gmail.com",
      contact: "7182785558",
      tenantCategory: "AIRPORT",
    },
    {
      tenantId: "HYD2023",
      tenantName: "Hyderabad International Airport",
      adminId: "mike@gmail.com",
      contact: "7182785559",
      tenantCategory: "AIRPORT",
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

  const totalTenants = data.length;
  const tenantCategories = [...new Set(data.map((item) => item.tenantCategory))]
    .length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tenant Master</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/tenant-master/add")}
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Tenants</h2>
          <p className="text-2xl font-bold">{totalTenants}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Unique Categories
          </h2>
          <p className="text-2xl font-bold">{tenantCategories}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Admins</h2>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Contacts</h2>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant Category
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
                  {item.tenantId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tenantName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.adminId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tenantCategory}
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
        <h2 className="text-xl font-bold mb-4">Selected Tenant Details</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
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
                Tenant Name
              </label>
              <input
                type="text"
                value={data[selectedRow].tenantName}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Admin Id
              </label>
              <input
                type="text"
                value={data[selectedRow].adminId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="text"
                value={data[selectedRow].contact}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant Category
              </label>
              <input
                type="text"
                value={data[selectedRow].tenantCategory}
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

export default TenantMaster;
