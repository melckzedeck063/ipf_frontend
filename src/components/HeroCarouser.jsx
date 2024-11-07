import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../store/apiController';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const HeroCarousel = () => {
    const [movies, setMovies] = useState([]);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const fetchTrendingMovie = async () => {
        try {
          const response = await fetchTrendingMovies();
          setMovies(response);
        } catch (error) {
          console.error('Error fetching trending movies:', error);
        }
      };
  
      fetchTrendingMovie();

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? movies.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
  };

  return (
    <section className="relative h-screen flex items-center -z-50 justify-center overflow-hidden">

      {movies.map((movie, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor:' black', opacity: 0.5}}></div>

          <div style={{marginTop : '16rem'}} className="flex flex-row justify-between w-11/12 mx-auto">
          <div className="relative  text-center max-w-2xl ml-4 px-4 items-center">
            <h1 style={{fontSize : '3rem'}} className="font-bold text-white mb-4">{movie.title}</h1>
            <p className="text-gray-200 text-lg mb-8">{movie.overview}</p>
            <div className="mt-6 flex flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Watch Now
              </button>
              <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add to Watchlist
              </button>
            </div>
          </div>
          <div className=""></div>
          </div>
        </div>
      ))}

   
   <div className="flex flex-row justify-between">
      <button
        onClick={prevSlide}
        className="text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
      >
        <ArrowBackIos />
      </button>
      <button
        onClick={nextSlide}
        className="text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
      >
        <ArrowForwardIos />
      </button>

   </div>

      <div className="absolute bottom-5 flex space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
