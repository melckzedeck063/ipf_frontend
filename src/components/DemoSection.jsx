import React, { useEffect, useState } from 'react'
import {  fetchUpcomingMovies } from '../store/apiController';

export default function DemoSection() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchUpcomingMovie = async () => {
          try {
            const response = await fetchUpcomingMovies();
            console.log("RESPONSE =====", response);
            setMovies(response); // Set all movies fetched
          } catch (error) {
            console.error('Error fetching Upcoming movies:', error);
          }
        };
    
        fetchUpcomingMovie();

    },[])

  return (
    <div>
        <div className="container mx-auto p-5">
            <div className="flex flex-row justify-between">
      <h2 className="text-3xl font-bold">Recommended Movies</h2>
            <div className="text-center mt-8">
        <a href="/signup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </a>
      </div>
            </div>
      <div className="container mx-auto p-5">
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

      <div className="text-center mt-8">
        <a href="/signup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </a>
      </div>
    </div>
    </div>
  );

}
