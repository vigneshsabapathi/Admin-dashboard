import React, { useState, useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const TenantSupport = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(0);

  const data = useMemo(
    () => [
      {
        supportId: "SUPPORT12345",
        tenantId: "TENANT001",
        ticketId: "TICKET001",
        emailId: "support1@example.com",
        closeDate: "2024-01-15",
        status: "Closed",
      },
      {
        supportId: "SUPPORT67890",
        tenantId: "TENANT002",
        ticketId: "TICKET002",
        emailId: "support2@example.com",
        closeDate: "2024-02-20",
        status: "In Progress",
      },
      {
        supportId: "SUPPORT11223",
        tenantId: "TENANT003",
        ticketId: "TICKET003",
        emailId: "support3@example.com",
        closeDate: "2024-03-10",
        status: "Open",
      },
      {
        supportId: "SUPPORT44556",
        tenantId: "TENANT001",
        ticketId: "TICKET004",
        emailId: "support4@example.com",
        closeDate: "2024-04-05",
        status: "Closed",
      },
      {
        supportId: "SUPPORT77889",
        tenantId: "TENANT002",
        ticketId: "TICKET005",
        emailId: "support5@example.com",
        closeDate: "2024-05-01",
        status: "In Progress",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Support ID",
        accessor: "supportId",
      },
      {
        Header: "Tenant ID",
        accessor: "tenantId",
      },
      {
        Header: "Ticket ID",
        accessor: "ticketId",
      },
      {
        Header: "Email ID",
        accessor: "emailId",
      },
      {
        Header: "Close Date",
        accessor: "closeDate",
      },
      {
        Header: "Status",
        accessor: "status",
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

  const totalTickets = data.length;
  const uniqueTenants = new Set(data.map((item) => item.tenantId)).size;
  const openTickets = data.filter((item) => item.status === "Open").length;
  const closedTickets = data.filter((item) => item.status === "Closed").length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tenant Support</h1>
      <button
        onClick={() => navigate("/tenant-support/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Tickets</h2>
          <p className="text-2xl font-bold">{totalTickets}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Unique Tenants</h2>
          <p className="text-2xl font-bold">{uniqueTenants}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Open Tickets</h2>
          <p className="text-2xl font-bold">{openTickets}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-500">Closed Tickets</h2>
          <p className="text-2xl font-bold">{closedTickets}</p>
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
        <h2 className="text-xl font-bold mb-4">
          Selected Support Ticket Details
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Support ID
              </label>
              <input
                type="text"
                value={data[selectedRow].supportId}
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
                Ticket ID
              </label>
              <input
                type="text"
                value={data[selectedRow].ticketId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                type="text"
                value={data[selectedRow].emailId}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Close Date
              </label>
              <input
                type="text"
                value={data[selectedRow].closeDate}
                readOnly
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <input
                type="text"
                value={data[selectedRow].status}
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

export default TenantSupport;
