// src/components/SubscriptionForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import viewObject from "../data/subscriptionMasterViewObject.json";

const SubscriptionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subscriptionId: "",
    tenantId: "",
    startDate: "",
    endDate: "",
    subscriptionName: "",
    subscriptionCategory: "",
    graceDuration: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new subscription object
    const newSubscription = {
      id: viewObject.subscriptionMaster.subscriptionTable.data.length + 1,
      ...formData,
    };

    // Get the current data from localStorage or use the default viewObject
    const currentData =
      JSON.parse(localStorage.getItem("subscriptionMasterViewObject")) ||
      viewObject;

    // Add the new subscription to the data
    currentData.subscriptionMaster.subscriptionTable.data.push(newSubscription);

    // Save the updated data to localStorage
    localStorage.setItem(
      "subscriptionMasterViewObject",
      JSON.stringify(currentData)
    );

    // Navigate back to the SubscriptionMaster page
    navigate("/subscription-master");
  };

  const handleCancel = () => {
    navigate("/subscription-master");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Subscription</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Subscription Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Id
              </label>
              <input
                type="text"
                name="subscriptionId"
                value={formData.subscriptionId}
                onChange={handleChange}
                placeholder="Enter subscription ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant Id
              </label>
              <input
                type="text"
                name="tenantId"
                value={formData.tenantId}
                onChange={handleChange}
                placeholder="Enter tenant ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Name
              </label>
              <input
                type="text"
                name="subscriptionName"
                value={formData.subscriptionName}
                onChange={handleChange}
                placeholder="Enter subscription name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Category
              </label>
              <input
                type="text"
                name="subscriptionCategory"
                value={formData.subscriptionCategory}
                onChange={handleChange}
                placeholder="Enter subscription category"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Grace Duration
              </label>
              <input
                type="text"
                name="graceDuration"
                value={formData.graceDuration}
                onChange={handleChange}
                placeholder="Enter grace duration"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
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

export default SubscriptionForm;
