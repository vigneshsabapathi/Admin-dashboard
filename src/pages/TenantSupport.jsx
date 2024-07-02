import React, { useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const TenantSupport = () => {
  const navigate = useNavigate();

  const data = useMemo(
    () => [
      {
        supportId: "SUPPORT12345",
        tenantId: "TENANT001",
        ticketId: "TICKET001",
        emailId: "support1@example.com",
        closeDate: "2024-01-01",
      },
      {
        supportId: "SUPPORT67890",
        tenantId: "TENANT002",
        ticketId: "TICKET002",
        emailId: "support2@example.com",
        closeDate: "2024-02-01",
      },
      {
        supportId: "SUPPORT11223",
        tenantId: "TENANT003",
        ticketId: "TICKET003",
        emailId: "support3@example.com",
        closeDate: "2024-03-01",
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
      <h1 className="text-2xl font-bold mb-4">Tenant Support</h1>
      <button
        onClick={() => navigate("/tenant-support/add")}
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

export default TenantSupport;
