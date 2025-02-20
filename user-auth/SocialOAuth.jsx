import React from "react";

const SocialOAuth = ({ providers, onAuth }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Login with Social Media</h2>
    <div className="space-y-4">
      {providers.map((provider) => (
        <button
          key={provider.name}
          onClick={() => onAuth(provider.name)}
          className={`w-full p-2 text-white rounded ${provider.color}`}
        >
          Login with {provider.name}
        </button>
      ))}
    </div>
  </div>
);

export default SocialOAuth;