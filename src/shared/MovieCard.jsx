import React from 'react'

const MovieCard = ({ title, userName, thumbnail }) => {
    return (
      <div className="w-48 bg-gray-700 rounded-lg p-2">
        <img src={`https://image.tmdb.org/t/p/w500${thumbnail}`} alt={title} className="rounded-lg w-full h-32 object-cover" />
      
        <h3 className="text-white mt-2">{title}</h3>
        <p className="text-gray-400 text-sm">By {userName}</p>
      </div>
    );
  };
  
  export default MovieCard;
  
