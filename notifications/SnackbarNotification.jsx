import React, { useEffect, useState } from 'react';

const SnackbarNotification = ({ message, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    return visible ? (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg">
            {message || 'This is a snackbar notification.'}
        </div>
    ) : null;
};

export default SnackbarNotification;
