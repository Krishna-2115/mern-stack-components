import React, { useState } from 'react';

const DismissibleNotification = ({ message }) => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <div className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 rounded-lg flex justify-between">
      <span>{message || 'This is a dismissible notification.'}</span>
      <button onClick={() => setVisible(false)} className="text-indigo-700 font-semibold">X</button>
    </div>
  ) : null;
};

export default DismissibleNotification;
