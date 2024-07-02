// src/components/AuditMasterTable.jsx
import React from "react";
import Table from "./Table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

const data = [
  {
    userId: "USER001",
    userIpAddress: "192.168.1.1",
    userTimestamp: "2024-01-01 12:00:00",
    actionCode: "CODE001",
    actionCategory: "Category A",
  },
  {
    userId: "USER002",
    userIpAddress: "192.168.1.2",
    userTimestamp: "2024-01-02 13:00:00",
    actionCode: "CODE002",
    actionCategory: "Category B",
  },
  {
    userId: "USER003",
    userIpAddress: "192.168.1.3",
    userTimestamp: "2024-01-03 14:00:00",
    actionCode: "CODE003",
    actionCategory: "Category C",
  },
];

const columns = [
  { Header: "User ID", accessor: "userId" },
  { Header: "User IP Address", accessor: "userIpAddress" },
  { Header: "User Timestamp", accessor: "userTimestamp" },
  { Header: "Action Code", accessor: "actionCode" },
  { Header: "Action Category", accessor: "actionCategory" },
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
];

const AuditMasterTable = () => {
  return <Table data={data} columns={columns} />;
};

export default AuditMasterTable;
