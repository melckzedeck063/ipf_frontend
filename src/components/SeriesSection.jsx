import React, { useEffect, useState } from 'react';
import { discoverMovies, discoverSeries, fetchJustReleased, fetchPopularMovies, fetchTrendingMovies } from '../store/apiController';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const SeriesSection = () => {
  const [justReleased, setJustReleased] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(justReleased.length / itemsPerPage);
  const totalPages2 = Math.ceil(popularMovies.length / itemsPerPage);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const justReleasedResponse = await discoverMovies();
        setJustReleased(justReleasedResponse);

        const popularResponse = await discoverSeries();
        setPopularMovies(popularResponse);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = justReleased.slice(startIndex, endIndex);

  const goToNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  const startIndex2 = (currentPage2 - 1) * itemsPerPage;
  const endIndex2 = startIndex2 + itemsPerPage;
  const currentItems2 = popularMovies.slice(startIndex2, endIndex2);

  const goToNextPage2 = () => setCurrentPage2((prevPage) => Math.min(prevPage + 1, totalPages2));
  const goToPrevPage2 = () => setCurrentPage2((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="bg-gray-900 text-white p-5 mt-8 w-10/12 mx-auto">

      <section>
        <div className="flex felx-row justify-between mt-12 mb-16">
        <h2 className="text-2xl font-bold mb-4">TV Series</h2>
          <div className="flex flex-row space-x-4">
          <button
            onClick={goToPrevPage2}
            disabled={currentPage2 === 1}
            className="bg-gray-700 h-10 w-10 mt-8 rounded-full disabled:bg-gray-500"
          >
            <ArrowBackIos  className='text-lg ml-1'/>
          </button>
          <button
            onClick={goToNextPage2}
            disabled={currentPage2 === totalPages2}
            className="bg-gray-700 h-10 w-10 justify-center items-center rounded-full disabled:bg-gray-500"
          >
            <ArrowForwardIos className='text-lg ml-1' />
          </button>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentItems2.map((movie, index) => (
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
      </section>
    </div>
  );
};

export default SeriesSection;
