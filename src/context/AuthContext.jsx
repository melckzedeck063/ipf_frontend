import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const URL1 = "https://www.themoviedb.org/login";
const URl2 = "http://localhost:9092/auth/login";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ email: 'user@example.com' });
    }
  }, []);

  const login = async (data) => {
    try {
        console.log('Data:', data);
        
        const response = await axios.post(URl2, { 
            "username": data.email, 
            "password": data.password 
        });

        localStorage.setItem('ipf-token', JSON.stringify(response.data));
        setUser(data.email);
        return response.data
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
    }
};

  const signup = async (data) => {
   const response =  await axios.post('http://localhost:9092/auth/register', { 
      "username": data.email, 
      "password": data.password,
      "firstName" : data.firstName,
      "lastName" : data.lastName 
    });

    return response.data
  };

  const profile = async () => {
    const token = localStorage.getItem('ipf-token');
    try {
      const response = await axios.get(
        'http://localhost:9092/auth/me',
        {},
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
  
  




  const logout = () => {
    localStorage.removeItem('fpi-token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
