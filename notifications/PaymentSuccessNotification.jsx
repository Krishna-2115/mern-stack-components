import React from 'react';

const PaymentSuccessNotification = ({ amount }) => (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
        <p>Payment of {amount || '$0.00'} was successful!</p>
    </div>
);

export default PaymentSuccessNotification;
