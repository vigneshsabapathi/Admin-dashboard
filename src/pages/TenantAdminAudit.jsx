import React, { useState, useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const TenantAdminAudit = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(0);

  const data = useMemo(
    () => [
      {
        tenantId: "TENANT001",
        loginTime: "2024-01-01 12:00:00",
        ipAddress: "192.168.1.1",
        actionHistory: "Login",
      },
      {
        tenantId: "TENANT002",
        loginTime: "2024-02-01 14:00:00",
        ipAddress: "192.168.1.2",
        actionHistory: "Logout",
      },
      {
        tenantId: "TENANT003",
        loginTime: "2024-03-01 16:00:00",
        ipAddress: "192.168.1.3",
        actionHistory: "Update",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Tenant ID",
        accessor: "tenantId",
      },
      {
        Header: "Login Time",
        accessor: "loginTime",
      },
      {
        Header: "IP Address",
        accessor: "ipAddress",
      },
      {
        Header: "Action History",
        accessor: "actionHistory",
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

  const totalAudits = data.length;
  const uniqueTenants = new Set(data.map((item) => item.tenantId)).size;
  const uniqueActions = new Set(data.map((item) => item.actionHistory)).size;
  const uniqueIPs = new Set(data.map((item) => item.ipAddress)).size;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tenant Admin Audit</h1>
      <button
        onClick={() => navigate("/tenant-admin-audit/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Audits</h2>
          <p className="text-2xl font-bold">{totalAudits}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Tenants</h2>
          <p className="text-2xl font-bold">{uniqueTenants}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Actions</h2>
          <p className="text-2xl font-bold">{uniqueActions}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">
            Unique IP Addresses
          </h2>
          <p className="text-2xl font-bold">{uniqueIPs}</p>
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
        <h2 className="text-xl font-bold mb-4">Selected Audit Details</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
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
                Login Time
              </label>
              <input
                type="text"
                value={data[selectedRow].loginTime}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                IP Address
              </label>
              <input
                type="text"
                value={data[selectedRow].ipAddress}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Action History
              </label>
              <input
                type="text"
                value={data[selectedRow].actionHistory}
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

export default TenantAdminAudit;
