import React, { useState } from 'react';

const PersistentNotification = ({ message }) => {
    const [visible, setVisible] = useState(true);

    return visible ? (
        <div className="bg-gray-200 text-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
            <span>{message || 'This notification will stay until dismissed.'}</span>
            <button onClick={() => setVisible(false)} className="text-gray-600 font-semibold">X</button>
        </div>
    ) : null;
};

export default PersistentNotification;
