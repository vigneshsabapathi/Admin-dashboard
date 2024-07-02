import React, { useMemo } from "react";
import { useTable } from "react-table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const AuditMaster = () => {
  const navigate = useNavigate();

  const data = useMemo(
    () => [
      {
        userId: "USER12345",
        ipAddress: "192.168.1.1",
        timestamp: "2024-01-01 12:00:00",
        actionCode: "ACTION123",
        actionCategory: "Category A",
      },
      {
        userId: "USER67890",
        ipAddress: "192.168.1.2",
        timestamp: "2024-02-01 14:00:00",
        actionCode: "ACTION456",
        actionCategory: "Category B",
      },
      {
        userId: "USER11223",
        ipAddress: "192.168.1.3",
        timestamp: "2024-03-01 16:00:00",
        actionCode: "ACTION789",
        actionCategory: "Category C",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "User ID",
        accessor: "userId",
      },
      {
        Header: "User IP Address",
        accessor: "ipAddress",
      },
      {
        Header: "User Timestamp",
        accessor: "timestamp",
      },
      {
        Header: "Action Code",
        accessor: "actionCode",
      },
      {
        Header: "Action Category",
        accessor: "actionCategory",
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
      <h1 className="text-2xl font-bold mb-4">Audit Master</h1>
      <button
        onClick={() => navigate("/audit-master/add")}
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

export default AuditMaster;
