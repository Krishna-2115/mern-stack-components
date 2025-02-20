import React, { useState } from 'react';

const SearchInput = ({ placeholder }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 pl-10"
      />
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
        🔍
      </span>
    </div>
  );
};

export default SearchInput;
