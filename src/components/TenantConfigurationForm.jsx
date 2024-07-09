// src/components/TenantConfigurationForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import viewObject from "../data/tenantConfigurationViewObject.json";

const TenantConfigurationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    configId: "",
    tenantId: "",
    address: "",
    adminEmailId: "",
    adminMobile: "",
    configCategory: "",
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
    // Create a new configuration object
    const newConfig = {
      id: viewObject.tenantConfiguration.configTable.data.length + 1,
      ...formData,
    };

    // Get the current data from localStorage or use the default viewObject
    const currentData =
      JSON.parse(localStorage.getItem("tenantConfigurationViewObject")) ||
      viewObject;

    // Add the new configuration to the data
    currentData.tenantConfiguration.configTable.data.push(newConfig);

    // Save the updated data to localStorage
    localStorage.setItem(
      "tenantConfigurationViewObject",
      JSON.stringify(currentData)
    );

    // Navigate back to the TenantConfiguration page
    navigate("/tenant-configuration");
  };

  // Handler for cancel button click
  const handleCancel = () => {
    navigate("/tenant-configuration");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Tenant Configuration</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Configuration Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {viewObject.tenantConfiguration.detailsForm.fields.map((field) => (
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

export default TenantConfigurationForm;
