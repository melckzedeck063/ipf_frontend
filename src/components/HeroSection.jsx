import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchTrendingMovies } from '../store/apiController';

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesToShow = 3; // Number of movies to show at a time

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response); // Set all movies fetched
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovie();

    // Change the movie every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change interval time as needed

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [movies]);

  if (!movies.length) return null;

  return (
    <div style={{height : 500}} className="relative bg-cover bg-center">
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"
      ></div>
      <div className="relative container mx-auto justify-center h-full text-white p-5">
        <div style={{marginTop : '10rem'}} className="flex-flex-row justify-between">
            <div className='w-6/12'>
              <h1 className="text-4xl md:text-6xl font-bold ">{movies[currentIndex].title}</h1>
              <p className="mt-4 text-lg md:text-xl">{movies[currentIndex].overview}</p>      
            </div>
            <div className='w-6/12'></div>
        </div>
        <div className="mt-6 flex flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Watch Now
          </button>
          <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add to Watchlist
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {movies.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .bg-cover {
          background-image: url(https://image.tmdb.org/t/p/original${movies[currentIndex].backdrop_path});
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
