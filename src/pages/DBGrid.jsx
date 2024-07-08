import React, { useState, useEffect } from "react";
import avatar from "../images/avatar.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";

const DataGrid = () => {
  const data = [
    {
      task: "Build 5-stories office - Building G",
      location: "Northwest corner",
      status: "In progress",
      date: "Jul 01",
      budget: "$1,500,000",
      progress: 30,
      team: [avatar, avatar1, avatar2],
    },
    {
      task: "Roof replacement",
      location: "Building A",
      status: "Reviewing",
      date: "Mar 01",
      budget: "$50,000",
      progress: 70,
      team: [avatar3, avatar4],
    },
    {
      task: "Elevator service",
      location: "All buildings",
      status: "Reviewing",
      date: "Dec 01",
      budget: "$5,000",
      progress: 60,
      team: [avatar],
    },
    {
      task: "Ventilation inspection",
      location: "Building C",
      status: "Completed",
      date: "May 01",
      budget: "$1,000",
      progress: 100,
      team: [],
    },
  ];

  const [selectedRow, setSelectedRow] = useState(0);

  const handleCheckboxChange = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    // By default, the first row is selected
    setSelectedRow(0);
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Data Grid</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
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
                      <div className="text-sm text-gray-500">
                        {item.location}
                      </div>
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
                    <div className="text-sm text-gray-900">{item.budget}</div>
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
                      {item.team.map((avatar, i) => (
                        <img
                          key={i}
                          className="h-6 w-6 rounded-full ring-2 ring-white"
                          src={avatar}
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
        <div className="mt-4 p-4 bg-white shadow sm:rounded-lg">
          <h2 className="text-xl font-bold mb-4">Selected Task Details</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Task
                </label>
                <input
                  type="text"
                  value={data[selectedRow].task}
                  readOnly
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  value={data[selectedRow].location}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="text"
                  value={data[selectedRow].date}
                  readOnly
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Budget
                </label>
                <input
                  type="text"
                  value={data[selectedRow].budget}
                  readOnly
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Progress
                </label>
                <input
                  type="text"
                  value={`${data[selectedRow].progress}%`}
                  readOnly
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Team
                </label>
                <div className="mt-1 flex">
                  {data[selectedRow].team.map((avatar, i) => (
                    <img
                      key={i}
                      className="h-6 w-6 rounded-full ring-2 ring-white mr-2"
                      src={avatar}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
