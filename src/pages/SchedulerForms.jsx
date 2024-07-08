import React, { useState, useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const SchedulerForms = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(0);

  const data = useMemo(
    () => [
      {
        scheduleId: "SCHED12345",
        tenantId: "TENANT001",
        jobId: "JOB001",
        jobType: "Backup",
        jobName: "Daily Backup",
        jobStatus: "Completed",
        nextRunTime: "2024-01-15 01:00:00",
      },
      {
        scheduleId: "SCHED67890",
        tenantId: "TENANT002",
        jobId: "JOB002",
        jobType: "Report",
        jobName: "Monthly Report",
        jobStatus: "Pending",
        nextRunTime: "2024-02-01 00:00:00",
      },
      {
        scheduleId: "SCHED11223",
        tenantId: "TENANT003",
        jobId: "JOB003",
        jobType: "Maintenance",
        jobName: "System Cleanup",
        jobStatus: "In Progress",
        nextRunTime: "2024-01-10 03:00:00",
      },
      {
        scheduleId: "SCHED44556",
        tenantId: "TENANT001",
        jobId: "JOB004",
        jobType: "Sync",
        jobName: "Data Synchronization",
        jobStatus: "Scheduled",
        nextRunTime: "2024-01-12 02:30:00",
      },
      {
        scheduleId: "SCHED77889",
        tenantId: "TENANT002",
        jobId: "JOB005",
        jobType: "Backup",
        jobName: "Weekly Backup",
        jobStatus: "Completed",
        nextRunTime: "2024-01-14 23:00:00",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Schedule ID",
        accessor: "scheduleId",
      },
      {
        Header: "Tenant ID",
        accessor: "tenantId",
      },
      {
        Header: "Job ID",
        accessor: "jobId",
      },
      {
        Header: "Job Type",
        accessor: "jobType",
      },
      {
        Header: "Job Name",
        accessor: "jobName",
      },
      {
        Header: "Job Status",
        accessor: "jobStatus",
      },
      {
        Header: "Next Run Time",
        accessor: "nextRunTime",
      },
      {
        Header: "Edit",
        accessor: "edit",
        Cell: () => (
          <button className="flex items-center text-blue-500 hover:text-blue-700">
            <PencilAltIcon className="h-5 w-5 mr-1" />
            Modify
          </button>
        ),
      },
      {
        Header: "Delete",
        accessor: "delete",
        Cell: () => (
          <button className="flex items-center text-red-500 hover:text-red-700">
            <TrashIcon className="h-5 w-5 mr-1" />
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const totalJobs = data.length;
  const uniqueTenants = new Set(data.map((item) => item.tenantId)).size;
  const completedJobs = data.filter(
    (item) => item.jobStatus === "Completed"
  ).length;
  const pendingJobs = data.filter(
    (item) => item.jobStatus === "Pending" || item.jobStatus === "Scheduled"
  ).length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Scheduler Forms</h1>
      <button
        onClick={() => navigate("/scheduler-forms/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Jobs</h2>
          <p className="text-2xl font-bold">{totalJobs}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Tenants</h2>
          <p className="text-2xl font-bold">{uniqueTenants}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Completed Jobs</h2>
          <p className="text-2xl font-bold">{completedJobs}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Pending Jobs</h2>
          <p className="text-2xl font-bold">{pendingJobs}</p>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => setSelectedRow(index)}
                  className={`cursor-pointer ${
                    selectedRow === index ? "bg-gray-100" : ""
                  }`}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-white shadow sm:rounded-lg">
        <h2 className="text-xl font-bold mb-4">Selected Job Details</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Schedule ID
              </label>
              <input
                type="text"
                value={data[selectedRow].scheduleId}
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
                Job ID
              </label>
              <input
                type="text"
                value={data[selectedRow].jobId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Type
              </label>
              <input
                type="text"
                value={data[selectedRow].jobType}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Name
              </label>
              <input
                type="text"
                value={data[selectedRow].jobName}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Status
              </label>
              <input
                type="text"
                value={data[selectedRow].jobStatus}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Next Run Time
              </label>
              <input
                type="text"
                value={data[selectedRow].nextRunTime}
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

export default SchedulerForms;
