import React, { useEffect, useState } from 'react';
import { fetchJustReleased, fetchPopularMovies } from '../store/apiController';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MovieComponent from '../shared/MovieComponent';
import '../styles/style.css'
import PopularMovieCard from '../shared/PopularMovieCard';

const MoviePage = () => {
  const [justReleased, setJustReleased] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage = 5;
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
        <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
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

        <div className="movie-grid">
          {currentItems.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
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
        <div className="movie-grid">
          {currentItems2.map((movie, index) => (
            <PopularMovieCard  movie={movie} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
