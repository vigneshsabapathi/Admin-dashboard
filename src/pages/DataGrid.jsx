// src/pages/DataGrid.jsx
import React, { useState, useMemo, useCallback, useEffect } from "react";
import viewObject from "../data/dataGridViewObject.json";

// Import avatar images
import avatar from "../images/avatar.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";

const DataGrid = () => {
  // State to hold the grid data
  const [gridData, setGridData] = useState(viewObject.dataGrid);
  // State to track the selected row
  const [selectedRow, setSelectedRow] = useState(0);

  // Object to map avatar file names to imported images
  const avatarMap = {
    "avatar.png": avatar,
    "avatar1.png": avatar1,
    "avatar2.png": avatar2,
    "avatar3.png": avatar3,
    "avatar4.png": avatar4,
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("dataGridViewObject");
    if (storedData) {
      setGridData(JSON.parse(storedData).dataGrid);
    }
  }, []);

  // Handler for checkbox change in the table
  const handleCheckboxChange = (index) => {
    setSelectedRow(index);
  };

  // Function to calculate stat card values
  const calculateStatCardValue = useCallback((card, data) => {
    switch (card.calculationType) {
      case "count":
        return data.length;
      case "sum":
        return data.reduce((sum, item) => sum + item[card.field], 0);
      case "statusCount":
        return data.filter((item) => item.status === card.status).length;
      default:
        return 0;
    }
  }, []);

  // Memoized stat card values
  const statCardValues = useMemo(() => {
    return gridData.statCards.map((card) => ({
      ...card,
      value: calculateStatCardValue(card, gridData.taskTable.data),
    }));
  }, [gridData.statCards, gridData.taskTable.data, calculateStatCardValue]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{gridData.metadata.pageTitle}</h1>
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {statCardValues.map((card) => (
          <div key={card.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-500">{card.title}</h2>
            <p className="text-2xl font-bold">
              {card.title === "Total Budget"
                ? `$${card.value.toLocaleString()}`
                : card.value}
            </p>
          </div>
        ))}
      </div>
      {/* Data table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {gridData.taskTable.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {gridData.taskTable.data.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedRow === index}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {item.task}
                    </div>
                    <div className="text-sm text-gray-500">{item.location}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "Reviewing"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${item.budget.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        item.progress === 100 ? "bg-green-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {item.team.map((avatarFile, i) => (
                      <img
                        key={i}
                        className="h-6 w-6 rounded-full ring-2 ring-white"
                        src={avatarMap[avatarFile]}
                        alt=""
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Selected task details */}
      <div className="mt-4 p-4 bg-white shadow sm:rounded-lg">
        <h2 className="text-xl font-bold mb-4">{gridData.detailsForm.title}</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {gridData.detailsForm.fields.map((field) => (
              <div
                key={field.id}
                className={field.id === "team" ? "col-span-2" : ""}
              >
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.id === "team" ? (
                  <div className="mt-1 flex">
                    {gridData.taskTable.data[selectedRow].team.map(
                      (avatarFile, i) => (
                        <img
                          key={i}
                          className="h-6 w-6 rounded-full ring-2 ring-white mr-2"
                          src={avatarMap[avatarFile]}
                          alt=""
                        />
                      )
                    )}
                  </div>
                ) : (
                  <input
                    type={field.type}
                    value={
                      field.id === "budget"
                        ? `$${gridData.taskTable.data[selectedRow][
                            field.id
                          ].toLocaleString()}`
                        : field.id === "progress"
                        ? `${gridData.taskTable.data[selectedRow][field.id]}%`
                        : gridData.taskTable.data[selectedRow][field.id]
                    }
                    readOnly
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataGrid;
