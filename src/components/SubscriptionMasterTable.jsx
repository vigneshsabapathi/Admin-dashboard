// src/components/SubscriptionMasterTable.jsx
import React from "react";
import Table from "./Table";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

const data = [
  {
    subscriptionId: "SUBS12345",
    tenantId: "TENANT001",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    subscriptionName: "Basic Plan",
    subscriptionCategory: "Category A",
  },
  {
    subscriptionId: "SUBS67890",
    tenantId: "TENANT002",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    subscriptionName: "Premium Plan",
    subscriptionCategory: "Category B",
  },
  {
    subscriptionId: "SUBS11223",
    tenantId: "TENANT003",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    subscriptionName: "Enterprise Plan",
    subscriptionCategory: "Category C",
  },
];

const columns = [
  { Header: "Subscription Id", accessor: "subscriptionId" },
  { Header: "Tenant Id", accessor: "tenantId" },
  { Header: "Subscription Start Date", accessor: "startDate" },
  { Header: "Subscription End Date", accessor: "endDate" },
  { Header: "Subscription Name", accessor: "subscriptionName" },
  { Header: "Subscription Category", accessor: "subscriptionCategory" },
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

const SubscriptionMasterTable = () => {
  return <Table data={data} columns={columns} />;
};

export default SubscriptionMasterTable;
