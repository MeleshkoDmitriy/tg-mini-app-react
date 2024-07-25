import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { FormPage } from './pages/FormPage/FormPage';
import { SDKProvider, initMainButton } from '@telegram-apps/sdk-react';

const routes = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/form', element: <FormPage /> },
]);

const [mainButton] = initMainButton();

useEffect(() => {
  mainButton.show();
}, [])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SDKProvider acceptCustomStyles debug>
      <RouterProvider router={routes} />
    </SDKProvider>
  </React.StrictMode>,
);
