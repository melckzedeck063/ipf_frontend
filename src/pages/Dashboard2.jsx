import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { chartData, chartOptions } from '../components/MockData';
import Sidebar2 from '../shared/SideBar2';
import DashboardCard from '../components/DashboardCard';
import ChartBar from '../components/Chart';
import { ContactMail, FavoriteRounded, Group } from '@mui/icons-material';
import { fetchTrendingMovies } from '../store/apiController';
import FeaturedVideo from '../components/FeaturedVideo';
import ContinueWatching from '../components/ContinueWatching';
import DashboardLayout from '../shared/DashboardLayout';
import MovieCard from '../shared/MovieCard';


const Dashboard2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [movieMetrics, setMovieMetrics] = useState({ totalMovies: 0, recommendations: [] });
  const [latestMovies, setLatestMovies] = useState([]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const fetchLatestMovie = async () => {
    try {
      const response = await fetchTrendingMovies()
      if (response == null) {
        throw new Error('Failed to fetch latest movies');
      }
      
      const setMovies = () => {
      console.log("HERE WE GO")
         console.log("HERE WE GO ===== ", response.data)
         setLatestMovies(response);
      }

      setMovies();
    } catch (error) {
      console.error('Error fetching latest movies:', error);
    }
  };

  useEffect(() => {
    fetchLatestMovie();
  }, []);
  console.log("========",latestMovies)

  return (
    <DashboardLayout>
  
          <main className="p-6 space-y-6 bg-gray-950">

            <div className="flex flex-row justify-between text-white">
                 <div className="">
                  <h3 className='text-2xl font-bold mb-4'>Welcome  Back to the MovieStread Dashboard</h3>
                  <FeaturedVideo  />
                 </div>
                 <div className="w-6/12">
                 <h2 className="text-2xl font-bold text-white mb-4">Continue Watching</h2>
                  <div className="flex flex-row justify-between space-x-2">
                     {latestMovies.slice(0, 4).map((movie, index) => (
                         <MovieCard key={index} title={movie.title} userName={movie.release_date} thumbnail={movie.backdrop_path} />
                     ))}
                  </div>
                 </div>
            </div>



            <div className="flex flex-row justify-between mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-52 mb-6 w-5/12">
                <DashboardCard title="Total Movies Watched" value={movieMetrics.totalMovies} icon={Group} />
                <DashboardCard title="Recommended Movies" value={movieMetrics.recommendations.length} icon={FavoriteRounded} />
              </div>

              <div className="bg-gray-700  shadow rounded-lg p-6 text-white">
                <h2 className="text-lg font-semibold mb-4">Top 5 Movies</h2>
                <table className="min-w-full bg-gray-700 text-white text-left">
                  <thead>
                    <tr className="bg-gray-700 text-left">
                      <th className="py-2 px-4 border-b">Title</th>
                      <th className="py-2 px-4 border-b">Release Date</th>
                      <th className="py-2 px-4 border-b">Popularity</th>
                      <th className="py-2 px-4 border-b">Popularity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {latestMovies.length > 0 ? (
                      latestMovies.slice(0, 5).map((movie) => ( // Display only the first 5 movies
                        <tr key={movie.id}>
                          <td className="py-2 px-4 border-b">{movie.title}</td>
                          <td className="py-2 px-4 border-b">{movie.release_date}</td>
                          <td className="py-2 px-4 border-b">{movie.popularity}</td>
                          <td className="py-2 px-4 border-b">{movie.popularity}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="py-2 px-4 text-center">No movies available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                
              </div>
            </div>

              <div className="">
                <ChartBar data={chartData} options={chartOptions} />
              </div>

          
          </main>
    </DashboardLayout>
  );
};

export default Dashboard2;
