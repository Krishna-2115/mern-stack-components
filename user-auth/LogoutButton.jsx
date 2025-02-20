const LogoutButton = ({ onLogout }) => {
    return (
        <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
