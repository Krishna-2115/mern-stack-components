export default function VoiceSearchInput() {
    return (
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Search or use voice..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button className="ml-2 p-2 bg-gray-200 rounded-full">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a2 2 0 00-2 2v6a2 2 0 104 0V4a2 2 0 00-2-2z" />
            <path fillRule="evenodd" d="M4 10a6 6 0 1112 0v2a2 2 0 11-4 0v-2a2 2 0 00-4 0v2a2 2 0 11-4 0v-2z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    );
  }
  