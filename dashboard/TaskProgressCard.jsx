import React from 'react';

const TaskProgressCard = () => {
    const tasks = [
        { id: 1, title: 'UI Design', progress: 75 },
        { id: 2, title: 'API Integration', progress: 50 },
        { id: 3, title: 'Testing & QA', progress: 30 },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Task Progress</h3>
            {tasks.map((task) => (
                <div key={task.id} className="mb-4">
                    <p className="text-gray-800">{task.title}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${task.progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{task.progress}% Complete</p>
                </div>
            ))}
        </div>
    );
};

export default TaskProgressCard;
