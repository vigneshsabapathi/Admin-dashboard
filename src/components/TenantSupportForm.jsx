// src/components/TenantSupportForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import viewObject from "../data/tenantSupportViewObject.json";

const TenantSupportForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    supportId: "",
    tenantId: "",
    ticketId: "",
    emailId: "",
    closeDate: "",
    status: "",
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
    // Create a new support ticket object
    const newSupportTicket = {
      id: viewObject.tenantSupport.supportTable.data.length + 1,
      ...formData,
    };

    // Get the current data from localStorage or use the default viewObject
    const currentData =
      JSON.parse(localStorage.getItem("tenantSupportViewObject")) || viewObject;

    // Add the new support ticket to the data
    currentData.tenantSupport.supportTable.data.push(newSupportTicket);

    // Save the updated data to localStorage
    localStorage.setItem(
      "tenantSupportViewObject",
      JSON.stringify(currentData)
    );

    // Navigate back to the TenantSupport page
    navigate("/tenant-support");
  };

  // Handler for cancel button click
  const handleCancel = () => {
    navigate("/tenant-support");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Support Ticket</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Support Ticket Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {viewObject.tenantSupport.detailsForm.fields.map((field) => (
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

export default TenantSupportForm;
