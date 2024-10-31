const API_KEY = '92a101d1867daea58c0d8d50de7a8b35';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  const data = await response.json();
  return data.results;
};



export const fetchUpcomingMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    return data.results;
  };



  export const fetchJustReleased = async () => {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    return data.results;
  };


  export const fetchPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    return data.results;
  };

  export const fetchLatestMovies = async () => {
    const response = await fetch(`${BASE_URL}/account/null/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`, {
      method: 'GET', 
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmExMDFkMTg2N2RhZWE1OGMwZDhkNTBkZTdhOGIzNSIsIm5iZiI6MTczMDM2MDAxNy42MjYwOTI0LCJzdWIiOiI2NzIyYjYxYWZlMmE4YTAxMWVkNzJjOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.76hEUhg7As1fgWBvAwYdNpZM1mEnn5tAyvu-JVpvBdY',
        'Accept': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
  
    const data = await response.json();
    return data.results; 
  };
  



  