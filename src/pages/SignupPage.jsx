import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomButton from '../shared/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router";
import { Stack } from "rsuite";
import { Alert } from "@mui/material";
import { useAuth } from '../context/AuthContext';
import Header from '../shared/Header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const SignupPage = () => {
  const [succeed, setSucceed] = useState(false);
  const [failed, setFailed] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format').trim(),
    firstName: Yup.string().required('First name is required').trim(),
    lastName: Yup.string().required('Last name is required').trim(),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 8 characters').trim(),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      reset({ email: "", password: "" });
      if (response?.error === false) {
        setSucceed(true);
        setFailed(false);
        setTimeout(() => {
          navigate('/login');
          setSucceed(false);
        }, 3000);
      } else {
        setFailed(true);
        setSucceed(false);
        setTimeout(() => {
          setSucceed(false);
          setFailed(false);
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    // Handle response, send `credentialResponse.credential` to your backend
    console.log("Google Login Success:", credentialResponse);
  };

  const handleGoogleFailure = (error) => {
    console.log("Google Login Failure:", error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="bg-gray-900 h-screen text-white">
        <Header />
        <div className="justify-center w-5/12 mx-auto items-center mt-32">
          <div className="relative bg-gray-700 shadow-md rounded-lg px-10 py-10 w-10/12 mx-auto z-10">
            <Stack>
              {succeed && <Alert severity="success">Login Successful.</Alert>}
              {failed && <Alert severity="error">Login failed, please try again.</Alert>}
            </Stack>
            <h1 className="text-2xl font-bold text-center mb-4 text-white dark:text-gray-200">Create Account!</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input type="text" id="firstName" placeholder="First name" className="shadow-sm rounded-md w-full px-3 py-2 border text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register('firstName')} />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input type="text" id="lastName" placeholder="Last name" className="shadow-sm rounded-md w-full px-3 py-2 border text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register('lastName')} />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" placeholder="your@email.com" className="shadow-sm rounded-md w-full px-3 py-2 border text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register('email')} />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input type="password" id="password" placeholder="Enter your password" className="shadow-sm rounded-md w-full px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" {...register('password')} />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                {/* <a href="/forgot" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none">Forgot Password?</a> */}
              </div>
              <CustomButton title={"Sign Up"} action={handleSubmit(onSubmit)} />
            </form>
            <div className="mt-4">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignupPage;
