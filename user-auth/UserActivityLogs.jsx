import React from "react";

const UserActivityLogs = ({ logs }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">User Activity Logs</h2>
        <ul className="space-y-2">
            {logs.map((log, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded">
                    {log.activity} - {new Date(log.timestamp).toLocaleString()}
                </li>
            ))}
        </ul>
    </div>
);

export default UserActivityLogs;