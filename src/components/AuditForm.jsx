// src/components/AuditForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import viewObject from "../data/auditMasterViewObject.json";

const AuditForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    auditId: "",
    tenantId: "",
    timestamp: "",
    action: "",
    ipAddress: "",
    userId: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new audit object
    const newAudit = {
      id: viewObject.auditMaster.auditTable.data.length + 1,
      ...formData,
    };

    // Get the current data from localStorage or use the default viewObject
    const currentData =
      JSON.parse(localStorage.getItem("auditMasterViewObject")) || viewObject;

    // Add the new audit to the data
    currentData.auditMaster.auditTable.data.push(newAudit);

    // Save the updated data to localStorage
    localStorage.setItem("auditMasterViewObject", JSON.stringify(currentData));

    // Navigate back to the AuditMaster page
    navigate("/audit-master");
  };

  // Handler for cancel button click
  const handleCancel = () => {
    navigate("/audit-master");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Audit</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Audit Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {/* Form fields */}
            {viewObject.auditMaster.detailsForm.fields.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuditForm;
