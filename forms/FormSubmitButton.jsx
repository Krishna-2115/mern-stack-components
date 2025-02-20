import React from 'react';

const FormSubmitButton = ({ text, onSubmit }) => (
  <button
    onClick={onSubmit}
    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
  >
    {text}
  </button>
);

export default FormSubmitButton;
