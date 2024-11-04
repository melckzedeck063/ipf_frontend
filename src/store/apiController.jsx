import axios from 'axios';

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


  export const discoverMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    return data.results;
  };


  export const discoverSeries = async () => {
    const response = await fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    return data.results;
  };


  export const  profile = async () => {
    const storage =   localStorage.getItem("ipf-token");
    const {data} = JSON.parse(storage);
    const {token} = data;

    try {
      const response = await axios.get(
        'http://localhost:9092/auth/me',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;

    } catch (error) {
      console.error("Error fetching profile data:", error);
      throw error;
    }
  };

  export const updateProfile =  async (values) => {
    const storage =   localStorage.getItem("ipf-token");
    const {data} = JSON.parse(storage);
    const {token} = data;

    const response =  await axios.put('http://localhost:9092/auth/update-user', { 
      "username": values.email, 
      "firstName" : values.firstName,
      "lastName" : values.lastName 
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

    console.log("UDPATE ===== " , response.data)
    return response.data
  }

  export const fetchLatestMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/latest?api_key=${API_KEY}`);

    console.log("HERE WE GO")
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    console.log("HERE WE GO ===== ", data)
    return data.results;
  };
  



  