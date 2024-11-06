import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchTrendingMovies, fetchUpcomingMovies } from '../store/apiController';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const FeaturedSection = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [additionalMovies, setAdditionalMovies] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(additionalMovies.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredResponse = await fetchUpcomingMovies();
        const additionalMoviesResponse = await fetchTrendingMovies();

        setFeaturedMovie(featuredResponse[19]);
        setAdditionalMovies(additionalMoviesResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("=======   ",  featuredMovie)

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = additionalMovies.slice(startIndex, endIndex);

  const goToNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="bg-gray-900 text-white p-12 mt-12 w-10/12 mx-auto">
        <div className="mt-6 mb-6">
            <h3 className="font-bold text-2xl">Featured in MovieStream</h3>
            <p className="font-medium">Best movies featured for you today</p>
        </div>
       
        {featuredMovie && (
          <div
            className="flex flex-col w-full bg-cover bg-center p-6 rounded-lg"
            style={{ 
              backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.poster_path})`,
             backgroundSize: 'cover',
            backgroundPosition: 'center' 
          }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor:' black', opacity: 0.5}}></div>
 <div className="flex flex-row justify-between space-x-6">
  <div className="mt-12 w-5/12">
  <h2 className="text-4xl font-bold mb-2">{featuredMovie.title}</h2>
            <p className="text-lg mb-4">{featuredMovie.subtitle}</p>
            <span className="text-sm text-yellow-400 mb-2">
              ⭐ {featuredMovie.vote_average} | {featuredMovie.release_date} | {featuredMovie.year}
            </span>
            <p className="text-gray-300 mb-6">{featuredMovie.overview} <span className="text-blue-500 cursor-pointer">{}</span></p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-green-500 rounded-lg">Play Now</button>
              <button className="px-4 py-2 bg-gray-800 rounded-lg">Add Watchlist</button>
            </div>
  </div>
  <div className="ml-6">
<div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-4">
  {currentItems.map((movie) => (
    <div key={movie.id} className="rounded-lg relative bg-gradient-to-b from-gray-800 via-transparent to-transparent">
      <img
        style={{ height: 280, width: '100%' }}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg mb-3 object-cover"
      />
      <div className="absolute top-4 p-1 bg-gradient-to-b from-gray-800 via-transparent to-transparent">
      <h6 className="font-semibold">{movie.title}</h6>
      <span className="text-yellow-400">⭐ {movie.rating}</span>
      </div>
    </div>
  ))}
</div>


        <div className="flex flex-row space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="bg-gray-700 h-10 w-10 mt-8 rounded-full disabled:bg-gray-500"
          >
            <ArrowBackIos  className='text-lg ml-1'/>
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-700 h-10 w-10 justify-center items-center rounded-full disabled:bg-gray-500"
          >
            <ArrowForwardIos className='text-lg ml-1' />
          </button>
        </div>
      </div>
            
          </div>
  </div>
        )}

    </div>
  );
};

export default FeaturedSection;
