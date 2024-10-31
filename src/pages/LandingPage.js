import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../store/apiController';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DemoSection from '../components/DemoSection';
import MoviePage from '../components/MovieSection';
import FeaturedSection from '../components/FeaturedSection';


export default function LandingPage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Header  />
    
    <HeroSection />

    <MoviePage  />

    <FeaturedSection   />

      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4">Trending Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="rounded overflow-hidden shadow-lg bg-gray-800">
              <img
                className="w-full h-48 object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-400">{movie.release_date}</p>
                <p className="mt-2">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
