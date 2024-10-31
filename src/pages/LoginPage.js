import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomButton from '../components/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router";
import { Stack } from "rsuite";
import { Alert } from "@mui/material";
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

const LoginPage = ({ isOpen, onClose }) => {
  const [succeed, setSucceed] = useState(false);
  const [failed, setFailed] = useState(false);
  const navigate = useNavigate();

  const {login} =  useAuth()

  const schema = Yup.object().shape({
    email: Yup
      .string()
      .required('Email is required')
      .email('Invalid email format')
      .trim(),
    password: Yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 8 characters')
      .trim(),
  });

  // Initialize react-hook-form with Yup resolver
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      sessionStorage.removeItem('ipf-token');
      const response = await login(data)
      setTimeout(() => {
        reset({
          email: "",
          password: ""
        });
      }, 1000);

      const newToken = response;
      console.log(newToken);
      if (newToken?.data?.token) {
        setSucceed(true);
        setFailed(false);

        setTimeout(() => {
          navigate('/dashboard2');
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

  // Only render if modal is open

  // if (!isOpen) return null;

  return (
    <div className="bg-gray-900 h-screen text-white">
      <Header  />

    <div className="justify-center w-5/12 mx-auto items-center mt-32">

      {/* Modal content */}
      <div className="relative bg-gray-700 shadow-md rounded-lg px-10 py-10 w-9/12 mx-auto  z-10">
        <div>
          <Stack>
            {succeed && <Alert severity="success">Login Successful.</Alert>}
            {failed && <Alert severity="error">Login failed, please try again.</Alert>}
          </Stack>
        </div>
        <h1 className="text-2xl font-bold text-center mb-4 text-white dark:text-gray-200">Welcome Back!</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="shadow-sm rounded-md w-full px-3 py-2 border text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-sm rounded-md w-full px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            <a href="/forgot" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none">
              Forgot Password?
            </a>
          </div>

          <CustomButton title={"Login"} action={handleSubmit(onSubmit)} />
        </form>
      </div>

      <div className="flex flex-row justify-between">
      {/* <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={(response) => console.log(response)}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookSuccess}
      /> */}
      </div>
    </div>
      </div>
  );
};

export default LoginPage;
