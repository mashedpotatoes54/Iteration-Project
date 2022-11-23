import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Auth from './routes/AuthRoute/AuthRoute.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import JournalEntryContainer from './components/journal/JournalEntryContainer.jsx';
import './styles/index.css';

import { Provider } from 'react-redux';
import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App.jsx'

import reducers from './reducers/combiner';

const store = configureStore({reducer: reducers} , compose(applyMiddleware(thunk)))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth/>
    // element: <Auth />,  
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path:'/home',
    element: <App />
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </Provider>
);
