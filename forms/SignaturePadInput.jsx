import React, { useRef } from 'react';

const SignaturePadInput = ({ label }) => {
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <canvas
        ref={canvasRef}
        width={400}
        height={150}
        className="border border-gray-300 rounded-md bg-white"
      />
      <button
        onClick={clearCanvas}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Clear
      </button>
    </div>
  );
};

export default SignaturePadInput;
