import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LatePage } from './pages/LatePage/LatePage';
import { SickPage } from './pages/SickPage/SickPage';

const routes = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/late', element: <LatePage /> },
  { path: '/sick', element: <SickPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes} />
  </React.StrictMode>,
);
