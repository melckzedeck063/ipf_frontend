import React, { useEffect, useState } from 'react';
import { fetchJustReleased, fetchPopularMovies } from '../store/apiController';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const MoviePage = () => {
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
      <section className="mb-10 mx-6">
        <div className="flex felx-row justify-between">
        <h2 className="text-2xl font-bold mb-4">Just Released</h2>
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
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </section>


      <section>
        <div className="flex felx-row justify-between mt-12">
        <h2 className="text-2xl font-bold mb-4">Popular of the Week</h2>
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
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems2.map((movie, index) => (
            <div key={movie.id} className="rounded-lg">
              <div className="flex items-center space-x-4">
                <h3 className="text-4xl font-bold text-gray-200 mr-3">
                  {index + 1}
                </h3>
                <div className="">
                  <img
                  style={{height :200}}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full object-cover rounded-md mb-3"
                  />
                </div>
                <div className="flex-1">
                  <h6 className="font-semibold">{movie.title}</h6>
                  <div className="my-1">Lang : {(movie.original_language)}</div>
                  <div className="text-gray-100">⭐ {movie.vote_average} | Movie</div>
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
