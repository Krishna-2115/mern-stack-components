import React from "react";

const ConfirmLogoutModal = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-around">
                <button
                    onClick={onConfirm}
                    className="p-2 bg-red-500 text-white rounded"
                >
                    Logout
                </button>
                <button
                    onClick={onCancel}
                    className="p-2 bg-gray-300 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
);

export default ConfirmLogoutModal;
