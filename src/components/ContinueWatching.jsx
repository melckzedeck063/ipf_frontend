import React from 'react'
import MovieCard from '../shared/MovieCard';

const ContinueWatching = () => {
  const movies = [
    { title: "Avatar", userName: "Ikako.t", thumbnail: "path-to-avatar-image.jpg" },
    { title: "Guardians", userName: "Steve", thumbnail: "path-to-guardians-image.jpg" },
    // Add more movies
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white">Continue Watching</h2>
      <div className="">
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} userName={movie.userName} thumbnail={movie.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;

