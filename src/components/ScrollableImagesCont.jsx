import React, { useEffect, useState } from 'react';
import { discoverMovies, discoverSeries, fetchProviders } from '../store/apiController';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const ScrollableImageContainer = () => {
  const [providers, setProviders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 11; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const providersResponse = await fetchProviders();
        setProviders(providersResponse);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    if (currentIndex < providers.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="relative h-60 w-10/12 mx-auto mt-12">
      <div className="flex space-x-4 overflow-hidden">
        {providers.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
            alt={`Image ${index}`}
            className="object-cover rounded-lg"
            height={150}
            width={120}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className={`bg-gray-800 text-white px-3 py-1 rounded-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex === 0}
        >
          <ArrowBackIos />
        </button>
        <button
          onClick={handleNext}
          className={`bg-gray-800 text-white px-3 py-1 rounded-lg ${currentIndex >= providers.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex >= providers.length - itemsPerPage}
        >
          <ArrowForwardIos  />
        </button>
      </div>
    </div>
  );
};

export default ScrollableImageContainer;
