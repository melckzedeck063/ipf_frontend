import React, { useEffect, useState } from 'react';
import { fetchJustReleased, fetchPopularMovies } from '../store/apiController';

const MoviePage = () => {
  const [justReleased, setJustReleased] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  
  // Pagination state for "Just Release"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(justReleased.length / itemsPerPage);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const justReleasedResponse = await fetchJustReleased();
        setJustReleased(justReleasedResponse);

        const popularResponse = await fetchPopularMovies();
        setPopularMovies(popularResponse);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Define start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = justReleased.slice(startIndex, endIndex);

  const goToNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="bg-gray-900 text-white p-5">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Just Released</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((movie) => (
            <div key={movie.id} className="min-w-[200px]">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{height : 320}}
                className="rounded-lg mb-3 w-full"
              />
              <h5 className="font-semibold">{movie.title}</h5>
              <div className="flex items-center space-x-2 text-sm text-yellow-400">
                <span>⭐ {movie.vote_average}</span>
                <span>| {movie.genre_ids.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 rounded disabled:bg-gray-500"
          >
            Previous
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 rounded disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      </section>

      {/* Popular of the Week Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular of the Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularMovies.slice(0, 4).map((movie, index) => (
            <div key={movie.id} className="rounded-lg">
              <div className="flex items-center">
                <h3 className="text-4xl font-bold text-gray-200 mr-3">
                  {index + 1}
                </h3>
                <div className="flex-1">
                  <img
                  style={{height :320}}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full object-cover rounded-md mb-3"
                  />
                  <h4 className="font-semibold">{movie.title}</h4>
                  <div className="text-yellow-400">⭐ {movie.vote_average}</div>
                  <p className="text-gray-400 text-sm">PG-13 | {movie.genre_ids.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
