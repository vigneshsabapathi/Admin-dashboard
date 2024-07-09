// src/pages/TenantConfiguration.jsx
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import viewObject from "../data/tenantConfigurationViewObject.json";

const TenantConfiguration = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(0);
  const [configData, setConfigData] = useState(viewObject.tenantConfiguration);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("tenantConfigurationViewObject");
    if (storedData) {
      setConfigData(JSON.parse(storedData).tenantConfiguration);
    }
  }, []);

  // Handler for row click in the table
  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  // Function to calculate stat card values
  const calculateStatCardValue = useCallback((card, data) => {
    switch (card.calculationType) {
      case "count":
        return data.length;
      case "uniqueCount":
        return new Set(data.map((item) => item[card.field])).size;
      default:
        return 0;
    }
  }, []);

  // Memoized stat card values
  const statCardValues = useMemo(() => {
    return configData.statCards.map((card) => ({
      ...card,
      value: calculateStatCardValue(card, configData.configTable.data),
    }));
  }, [
    configData.statCards,
    configData.configTable.data,
    calculateStatCardValue,
  ]);

  // Handler for modify button click
  const handleModify = (id) => {
    navigate(`/tenant-configuration/edit/${id}`);
  };

  // Handler for delete button click
  const handleDelete = (id) => {
    const updatedData = {
      ...configData,
      configTable: {
        ...configData.configTable,
        data: configData.configTable.data.filter((item) => item.id !== id),
      },
    };

    setConfigData(updatedData);

    // Update localStorage
    const currentData = JSON.parse(
      localStorage.getItem("tenantConfigurationViewObject") || "{}"
    );
    currentData.tenantConfiguration = updatedData;
    localStorage.setItem(
      "tenantConfigurationViewObject",
      JSON.stringify(currentData)
    );
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {configData.metadata.pageTitle}
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/tenant-configuration/add")}
      >
        {configData.metadata.addNewButtonText}
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {statCardValues.map((card) => (
          <div key={card.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-500">{card.title}</h2>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {configData.configTable.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {configData.configTable.data.map((item, index) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(index)}
                className={`cursor-pointer ${
                  selectedRow === index ? "bg-gray-100" : ""
                }`}
              >
                {configData.configTable.headers.map((header) => (
                  <td
                    key={`${item.id}-${header.id}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {header.id === "edit" ? (
                      <button
                        className="flex items-center text-blue-500 hover:text-blue-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModify(item.id);
                        }}
                      >
                        <PencilAltIcon className="h-5 w-5 mr-1" />
                        Modify
                      </button>
                    ) : header.id === "delete" ? (
                      <button
                        className="flex items-center text-red-500 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item.id);
                        }}
                      >
                        <TrashIcon className="h-5 w-5 mr-1" />
                        Delete
                      </button>
                    ) : (
                      item[header.id]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-white shadow sm:rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          {configData.detailsForm.title}
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {configData.detailsForm.fields.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={
                    configData.configTable.data[selectedRow]?.[field.id] || ""
                  }
                  readOnly
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TenantConfiguration;
