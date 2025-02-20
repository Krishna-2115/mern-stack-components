import React from 'react';

const BadgeNotification = ({ count }) => (
  <div className="relative inline-block">
    <button className="bg-gray-200 p-3 rounded-full">
      🔔
      {count > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </button>
  </div>
);

export default BadgeNotification;
