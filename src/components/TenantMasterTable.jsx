// src/components/TenantMasterTable.jsx
import React from "react";
import Table from "./Table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

const data = [
  {
    tenantId: "TENANT001",
    tenantName: "Tenant 1",
    adminId: "admin1@example.com",
    adminContact: "1234567890",
    tenantCategory: "Category A",
  },
  {
    tenantId: "TENANT002",
    tenantName: "Tenant 2",
    adminId: "admin2@example.com",
    adminContact: "2345678901",
    tenantCategory: "Category B",
  },
  {
    tenantId: "TENANT003",
    tenantName: "Tenant 3",
    adminId: "admin3@example.com",
    adminContact: "3456789012",
    tenantCategory: "Category C",
  },
];

const columns = [
  { Header: "Tenant Id", accessor: "tenantId" },
  { Header: "Tenant Name", accessor: "tenantName" },
  { Header: "Admin Id", accessor: "adminId" },
  { Header: "Admin Contact", accessor: "adminContact" },
  { Header: "Tenant Category", accessor: "tenantCategory" },
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

const TenantMasterTable = () => {
  return <Table data={data} columns={columns} />;
};

export default TenantMasterTable;
