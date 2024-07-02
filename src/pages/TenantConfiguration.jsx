import React, { useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const TenantConfiguration = () => {
  const navigate = useNavigate();

  const data = useMemo(
    () => [
      {
        configId: "CONFIG12345",
        tenantId: "TENANT001",
        address: "123 Main St",
        adminEmailId: "admin1@example.com",
        adminMobile: "123-456-7890",
      },
      {
        configId: "CONFIG67890",
        tenantId: "TENANT002",
        address: "456 Elm St",
        adminEmailId: "admin2@example.com",
        adminMobile: "098-765-4321",
      },
      {
        configId: "CONFIG11223",
        tenantId: "TENANT003",
        address: "789 Pine St",
        adminEmailId: "admin3@example.com",
        adminMobile: "111-222-3333",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Config ID",
        accessor: "configId",
      },
      {
        Header: "Tenant ID",
        accessor: "tenantId",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Admin Email ID",
        accessor: "adminEmailId",
      },
      {
        Header: "Admin Mobile",
        accessor: "adminMobile",
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
      <h1 className="text-2xl font-bold mb-4">Tenant Configuration</h1>
      <button
        onClick={() => navigate("/tenant-configuration/add")}
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

export default TenantConfiguration;
