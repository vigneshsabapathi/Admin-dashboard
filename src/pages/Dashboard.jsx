// src/pages/Dashboard.jsx
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
        placeholder="Search for customer's name"
        className="border rounded p-2 w-full"
      />
    </span>
  );
};

// Custom Status cell component
const StatusCell = ({ value }) => {
  const statusColor =
    value === "SUCCESSFUL"
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

const Dashboard = () => {
  const data = useMemo(
    () => [
      {
        customer: "avatar1.png",
        deposit: "NGN 34,600",
        date: "Jan 6, 2022 09:21",
        voucher: "00437E",
        status: "SUCCESSFUL",
      },
      {
        customer: "avatar2.png",
        deposit: "NGN 34,600",
        date: "Jan 6, 2022 09:21",
        voucher: "00437E",
        status: "FAILED",
      },
      {
        customer: "avatar3.png",
        deposit: "NGN 34,600",
        date: "Jan 6, 2022 09:21",
        voucher: "00437E",
        status: "SUCCESSFUL",
      },
      {
        customer: "avatar4.png",
        deposit: "NGN 34,600",
        date: "Jan 6, 2022 09:21",
        voucher: "00437E",
        status: "SUCCESSFUL",
      },
      {
        customer: "avatar.png",
        deposit: "NGN 34,600",
        date: "Jan 6, 2022 09:21",
        voucher: "00437E",
        status: "SUCCESSFUL",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "checkbox",
        Cell: ({ row }) => (
          <div>
            <input type="checkbox" {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      {
        Header: "Customer",
        accessor: "customer",
        Cell: AvatarCell,
      },
      {
        Header: "Deposit",
        accessor: "deposit",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Voucher No.",
        accessor: "voucher",
      },
      {
        Header: "Trans. Status",
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
    pageCount,
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
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Total outstanding balance
          </h2>
          <p className="text-2xl font-bold text-gray-900">6,078,288</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Total repayment pending
          </h2>
          <p className="text-2xl font-bold text-gray-900">72,864</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm font-semibold text-gray-600">
            Total transaction counts
          </h2>
          <p className="text-2xl font-bold text-gray-900">3,062</p>
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
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
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
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
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
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Last</span>
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

export default Dashboard;
