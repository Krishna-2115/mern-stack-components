import React from 'react';

const Alert = ({ message, type = 'info' }) => {
    const getAlertStyle = () => {
        switch (type) {
            case 'error': return { backgroundColor: '#f8d7da', color: '#721c24' };
            case 'success': return { backgroundColor: '#d4edda', color: '#155724' };
            default: return { backgroundColor: '#cce5ff', color: '#004085' };
        }
    };

    return (
        <div style={{ padding: '10px', borderRadius: '4px', ...getAlertStyle() }}>
            {message}
        </div>
    );
};

export default Alert;
