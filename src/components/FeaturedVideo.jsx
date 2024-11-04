import React from 'react'

import { PlayIcon } from "@heroicons/react/solid";

const FeaturedVideo = () => {
  return (
    <div className="flex flex-col bg-gray-700 mb-6 p-6 rounded-lg w-full">
      <h2 className="text-4xl font-bold text-white">MovieDB</h2>
      <p className="text-xl text-gray-300">The Pale Blue Eye</p>
      <div className="flex items-center mt-2 space-x-4">
        <span className="bg-yellow-500 text-black px-2 rounded">7.8</span>
        <span className="bg-gray-700 px-2 rounded">English</span>
      </div>
      <button className="mt-4 flex items-center space-x-2 w-4/12 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
        <PlayIcon className="h-5 w-5" />
        <span>Watch</span>
      </button>
    </div>
  );
};

export default FeaturedVideo;
