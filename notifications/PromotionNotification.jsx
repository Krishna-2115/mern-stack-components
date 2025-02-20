import React from 'react';

const PromotionNotification = ({ offer }) => (
  <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 rounded-lg">
    <p>{offer || 'Check out our latest promotions!'}</p>
  </div>
);

export default PromotionNotification;
