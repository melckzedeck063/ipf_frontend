import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../store/apiController';
import HeroSection from '../components/HeroSection';
import DemoSection from '../components/DemoSection';
import MoviePage from '../components/MovieSection';
import FeaturedSection from '../components/FeaturedSection';
import SeriesSection from '../components/SeriesSection';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import HeroCarousel from '../components/HeroCarouser';
import ScrollableImageContainer from '../components/ScrollableImagesCont';


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
    <div className="bg-gray-900 h-full text-white">
       <div className="sticky top-0 z-50">
  <Header />
    </div>

    <div className="relative z-10 mt-4">
      <HeroCarousel />
    </div>


    <ScrollableImageContainer  />

    <div className="mx-1 my-4">
    <MoviePage  />
    </div>

    <FeaturedSection   />

      <div className=" pt-6 pb-12">
         <SeriesSection />
      </div>
      <Footer  />
    </div>
  );
}
