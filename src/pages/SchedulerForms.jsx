import React, { useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const SchedulerForms = () => {
  const navigate = useNavigate();

  const data = useMemo(
    () => [
      {
        scheduleId: "SCHED12345",
        tenantId: "TENANT001",
        jobId: "JOB001",
        jobType: "Type A",
        jobName: "Job 1",
        jobStatus: "Completed",
      },
      {
        scheduleId: "SCHED67890",
        tenantId: "TENANT002",
        jobId: "JOB002",
        jobType: "Type B",
        jobName: "Job 2",
        jobStatus: "Pending",
      },
      {
        scheduleId: "SCHED11223",
        tenantId: "TENANT003",
        jobId: "JOB003",
        jobType: "Type C",
        jobName: "Job 3",
        jobStatus: "In Progress",
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Scheduler Forms</h1>
      <button
        onClick={() => navigate("/scheduler-forms/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      <table
        {...getTableProps()}
        className="min-w-full bg-white divide-y divide-gray-200"
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
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
  );
};

export default SchedulerForms;
