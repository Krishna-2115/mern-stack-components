import React, { useState } from 'react';

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value.replace(/[^0-9]/g, '');
    setOtp(newOtp);
    if (element.nextSibling) element.nextSibling.focus();
  };

  return (
    <div className="flex justify-center gap-2 mb-4">
      {otp.map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          value={otp[i]}
          onChange={(e) => handleChange(e.target, i)}
          className="w-10 h-10 text-center border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      ))}
    </div>
  );
};

export default OTPInput;
