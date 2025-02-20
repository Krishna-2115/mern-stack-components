import React, { useEffect } from "react";

const SessionTimeout = ({ onTimeout }) => {
    useEffect(() => {
        const timer = setTimeout(onTimeout, 3600000); // 1 hour
        return () => clearTimeout(timer);
    }, [onTimeout]);

    return null;
};

export default SessionTimeout;