import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { chartData, chartOptions } from '../components/MockData';
import Sidebar2 from '../components/SideBar2';
import Header from '../components/Header';
import DashboardCard from '../components/DashboardCard';
import ChartBar from '../components/Chart';
import MainLayout from '../components/MainLayout';

import { ContactMail, FavoriteRounded, Group } from '@mui/icons-material';
import { fetchPopularMovies2 } from '../store/apiController';
import Header2 from '../components/DashboardHeader';

const Dashboard2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [movieMetrics, setMovieMetrics] = useState({ totalMovies: 0, recommendations: [] });
  const [latestMovies, setLatestMovies] = useState([]);

  const fetchLatestMovies = async () => {
    try {
      const response = await fetchLatestMovies()

      if (!response.ok) {
        throw new Error('Failed to fetch latest movies');
      }

  
      setLatestMovies(response);
    } catch (error) {
      console.error('Error fetching latest movies:', error);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Fetch latest movies on component mount
    fetchLatestMovies();
  }, []);

  return (
    <MainLayout>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex-1 flex flex-col">
          <div className="sticky top-0 z-10">
            <Header2 />
          </div>
          <main className="p-6 space-y-6">
            <div className="flex flex-row justify-between mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-52 mb-6 w-5/12">
                {/* Display Key Metrics */}
                <DashboardCard title="Total Movies Watched" value={movieMetrics.totalMovies} icon={Group} />
                <DashboardCard title="Recommended Movies" value={movieMetrics.recommendations.length} icon={FavoriteRounded} />
              </div>

              <div className="bg-white w-7/12 shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Latest Movies</h2>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="py-2 px-4 border-b">Title</th>
                      <th className="py-2 px-4 border-b">Release Date</th>
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
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="py-2 px-4 text-center">No movies available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Data Visualizations */}
              <ChartBar data={chartData} options={chartOptions} />

              {/* Table for Latest Movies */}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard2;
