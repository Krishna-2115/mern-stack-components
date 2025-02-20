import React, { useEffect, useState } from 'react';

const ToastNotification = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return visible ? (
    <div className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
      {message || "This is a toast notification."}
    </div>
  ) : null;
};

export default ToastNotification;
