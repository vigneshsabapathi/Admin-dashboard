// src/components/SchedulerForm.jsx
import React, { useState } from "react";

const SchedulerForm = () => {
  const [formData, setFormData] = useState({
    scheduleId: "",
    tenantId: "",
    jobId: "",
    jobType: "",
    jobName: "",
    jobStatus: "",
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
      <h1 className="text-2xl font-bold mb-4">Scheduler Forms</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Job Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Schedule ID
              </label>
              <input
                type="text"
                name="scheduleId"
                value={formData.scheduleId}
                onChange={handleChange}
                placeholder="Enter schedule ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenant ID
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
                Job ID
              </label>
              <input
                type="text"
                name="jobId"
                value={formData.jobId}
                onChange={handleChange}
                placeholder="Enter job ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Type
              </label>
              <input
                type="text"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                placeholder="Enter job type"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Name
              </label>
              <input
                type="text"
                name="jobName"
                value={formData.jobName}
                onChange={handleChange}
                placeholder="Enter job name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Status
              </label>
              <input
                type="text"
                name="jobStatus"
                value={formData.jobStatus}
                onChange={handleChange}
                placeholder="Enter job status"
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

export default SchedulerForm;
