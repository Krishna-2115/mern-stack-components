import React from 'react';

const DashboardWidget = ({ title, value }) => {
  return (
    <div className="dashboard-widget">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DashboardWidget;
