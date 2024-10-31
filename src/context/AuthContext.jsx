import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

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
        
        const response = await axios.post('http://localhost:9092/auth/login', { 
            "username": data.email, 
            "password": data.password 
        });

        const token = response.data.token;
        localStorage.setItem('fpi-token', token);
        setUser(data.email);
        return response.data
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
    }
};

  const signup = async (email, password) => {
    await axios.post('http://localhost:9092/auth/signup', { email, password });
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
