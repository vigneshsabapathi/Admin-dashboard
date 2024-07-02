import React, { useState } from "react";

const TenantForms = () => {
  const [formData, setFormData] = useState({
    tenantName: "",
    tenantId: "",
    tenantPrefix: "",
    dynamicUrlKey: "",
    adminId: "",
    contact: "",
    startDate: "",
    tenantCategory: "",
    isViolated: "NO",
    companyDetails: "",
    billingDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tenant Master</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Tenant Information */}
        <div>
          <h2 className="text-xl font-semibold">Tenant Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant Name
              </label>
              <input
                type="text"
                name="tenantName"
                value={formData.tenantName}
                onChange={handleChange}
                placeholder="Enter tenant name"
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
                Tenant Prefix
              </label>
              <input
                type="text"
                name="tenantPrefix"
                value={formData.tenantPrefix}
                onChange={handleChange}
                placeholder="Enter tenant prefix"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant Category
              </label>
              <select
                name="tenantCategory"
                value={formData.tenantCategory}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select category</option>
                <option value="IT Sector">IT Sector</option>
                <option value="Education Sector">Education Sector</option>
                <option value="Telecom Sector">Telecom Sector</option>
                <option value="Job">Job</option>
              </select>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div>
          <h2 className="text-xl font-semibold">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Admin Id
              </label>
              <input
                type="text"
                name="adminId"
                value={formData.adminId}
                onChange={handleChange}
                placeholder="Enter admin ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Details
              </label>
              <input
                type="text"
                name="companyDetails"
                value={formData.companyDetails}
                onChange={handleChange}
                placeholder="Enter company details"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date
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
                Is Violated
              </label>
              <select
                name="isViolated"
                value={formData.isViolated}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div>
          <h2 className="text-xl font-semibold">Billing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Billing Details
              </label>
              <input
                type="text"
                name="billingDetails"
                value={formData.billingDetails}
                onChange={handleChange}
                placeholder="Enter billing details"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
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

export default TenantForms;
