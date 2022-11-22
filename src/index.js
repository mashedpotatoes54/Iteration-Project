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



import App from './components/App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
    // element: <Auth />,  
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
    element: <JournalEntryContainer />
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
