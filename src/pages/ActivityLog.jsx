import React from "react";

const ActivityLog = () => {
  const activityData = [
    {
      id: 1,
      date: "2024-07-01",
      time: "10:00 AM",
      activity: "Logged in",
      ipAddress: "192.168.1.1",
    },
    {
      id: 2,
      date: "2024-07-01",
      time: "11:00 AM",
      activity: "Viewed Dashboard",
      ipAddress: "192.168.1.1",
    },
    {
      id: 3,
      date: "2024-07-01",
      time: "12:00 PM",
      activity: "Updated Profile",
      ipAddress: "192.168.1.1",
    },
    {
      id: 4,
      date: "2024-07-01",
      time: "01:00 PM",
      activity: "Logged out",
      ipAddress: "192.168.1.1",
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Activity Log</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Activity
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                IP Address
              </th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((activity) => (
              <tr key={activity.id}>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {activity.date}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {activity.time}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {activity.activity}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {activity.ipAddress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
