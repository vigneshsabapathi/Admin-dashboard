// src/pages/UsageAnalytics.jsx
import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useRowSelect,
} from "react-table";
import { SearchIcon } from "@heroicons/react/solid";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import avatar from "../images/avatar.png";

// Global Filter component
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span className="flex items-center mb-4">
      <SearchIcon className="h-5 w-5 mr-2" />
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search for user's name"
        className="border rounded p-2 w-full"
      />
    </span>
  );
};

// Custom Status cell component
const StatusCell = ({ value }) => {
  const statusColor =
    value === "ACTIVE"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}
    >
      {value}
    </span>
  );
};

// Avatar cell component
const AvatarCell = ({ value }) => {
  const avatars = {
    "avatar1.png": avatar1,
    "avatar2.png": avatar2,
    "avatar3.png": avatar3,
    "avatar4.png": avatar4,
    "avatar.png": avatar,
  };

  return (
    <div className="flex items-center">
      <img src={avatars[value]} alt="" className="w-8 h-8 rounded-full mr-2" />
      <span>{value.split(".")[0]}</span>
    </div>
  );
};

const UsageAnalytics = () => {
  const data = useMemo(
    () => [
      {
        user: "avatar1.png",
        usage: "54 hours",
        date: "2024-06-01 10:20",
        activity: "Logged in",
        status: "ACTIVE",
      },
      {
        user: "avatar2.png",
        usage: "78 hours",
        date: "2024-06-01 09:15",
        activity: "Uploaded document",
        status: "INACTIVE",
      },
      {
        user: "avatar3.png",
        usage: "22 hours",
        date: "2024-06-01 11:30",
        activity: "Downloaded report",
        status: "ACTIVE",
      },
      {
        user: "avatar4.png",
        usage: "100 hours",
        date: "2024-06-01 08:45",
        activity: "Changed password",
        status: "ACTIVE",
      },
      {
        user: "avatar.png",
        usage: "65 hours",
        date: "2024-06-01 12:00",
        activity: "Logged out",
        status: "ACTIVE",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "User",
        accessor: "user",
        Cell: AvatarCell,
      },
      {
        Header: "Usage",
        accessor: "usage",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Activity",
        accessor: "activity",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusCell,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect
  );

  const { globalFilter, pageIndex } = state;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Usage Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Total Active Users
          </h2>
          <p className="text-2xl font-bold text-gray-900">4</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Total Inactive Users
          </h2>
          <p className="text-2xl font-bold text-gray-900">1</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Average Usage Time
          </h2>
          <p className="text-2xl font-bold text-gray-900">64 hours</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Average Down Time
          </h2>
          <p className="text-2xl font-bold text-gray-900">22 Minutes</p>
        </div>
      </div>

      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

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
          {page.map((row) => {
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

      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Page <span className="font-medium">{pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">First</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a1 1 0 01-.707-1.707L13.586 10 9.293 5.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5A1 1 0 0110 18z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 18a1 1 0 01-.707-1.707L7.586 10 3.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5A1 1 0 014 18z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageAnalytics;
