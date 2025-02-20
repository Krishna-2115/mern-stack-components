import React from 'react';

const ProjectTimelineCard = () => {
  const timeline = [
    { phase: 'Planning', deadline: '2025-02-25' },
    { phase: 'Development', deadline: '2025-03-15' },
    { phase: 'Testing', deadline: '2025-04-05' },
    { phase: 'Launch', deadline: '2025-04-20' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Project Timeline</h3>
      <ul className="space-y-4">
        {timeline.map((item, index) => (
          <li key={index} className="flex justify-between">
            <p>{item.phase}</p>
            <p className="text-gray-500">{item.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTimelineCard;
