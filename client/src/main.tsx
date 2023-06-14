import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

// import createCache from '@emotion/cache';

// export const muiCache = createCache({
//   key: 'mui',
//   prepend: true,
// });

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
