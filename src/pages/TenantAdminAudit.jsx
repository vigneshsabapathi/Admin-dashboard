// src/pages/TenantAdminAudit.jsx
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import viewObject from "../data/tenantAdminAuditViewObject.json";

const TenantAdminAudit = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(0);
  const [auditData, setAuditData] = useState(viewObject.tenantAdminAudit);

  // Load data from localStorage on component mount and when the component updates
  useEffect(() => {
    const storedData = localStorage.getItem("tenantAdminAuditViewObject");
    if (storedData) {
      setAuditData(JSON.parse(storedData).tenantAdminAudit);
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
    return auditData.statCards.map((card) => ({
      ...card,
      value: calculateStatCardValue(card, auditData.auditTable.data),
    }));
  }, [auditData.statCards, auditData.auditTable.data, calculateStatCardValue]);

  // Handler for delete button click
  const handleDelete = (id) => {
    const updatedData = {
      ...auditData,
      auditTable: {
        ...auditData.auditTable,
        data: auditData.auditTable.data.filter((item) => item.id !== id),
      },
    };

    setAuditData(updatedData);

    // Update localStorage
    const currentData = JSON.parse(
      localStorage.getItem("tenantAdminAuditViewObject") || "{}"
    );
    currentData.tenantAdminAudit = updatedData;
    localStorage.setItem(
      "tenantAdminAuditViewObject",
      JSON.stringify(currentData)
    );
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {auditData.metadata.pageTitle}
      </h1>
      <button
        onClick={() => navigate("/tenant-admin-audit/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {auditData.metadata.addNewButtonText}
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
              {auditData.auditTable.headers.map((header) => (
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
            {auditData.auditTable.data.map((item, index) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(index)}
                className={`cursor-pointer ${
                  selectedRow === index ? "bg-gray-100" : ""
                }`}
              >
                {auditData.auditTable.headers.map((header) => (
                  <td
                    key={`${item.id}-${header.id}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {header.id === "edit" ? (
                      <button className="flex items-center text-blue-500 hover:text-blue-700">
                        <PencilAltIcon className="h-5 w-5 mr-1" />
                        Modify
                      </button>
                    ) : header.id === "delete" ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item.id);
                        }}
                        className="flex items-center text-red-500 hover:text-red-700"
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
          {auditData.detailsForm.title}
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {auditData.detailsForm.fields.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={
                    auditData.auditTable.data[selectedRow]?.[field.id] || ""
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

export default TenantAdminAudit;
