import React from 'react';

const ProgressBar = ({ progress }) => {
    const containerStyle = {
        width: '100%',
        backgroundColor: '#e0e0df',
        borderRadius: '2px',
    };

    const fillerStyle = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#3b5998',
        borderRadius: 'inherit',
        textAlign: 'right',
    };

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>
                <span>{`${progress}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
