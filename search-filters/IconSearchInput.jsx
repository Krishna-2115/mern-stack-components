export default function IconSearchInput() {
    return (
      <div className="p-4 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search with icon..."
          className="w-full pl-10 pr-3 py-2 border rounded"
        />
      </div>
    );
  }
  