import * as React from 'react';
import * as ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './views/Dashboard';
import createCache from '@emotion/cache';
// import {
//   BrowserRouter,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";


export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
    },
]);


createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />} />
//     <Route path="/about" element={<Dashboard/>} />
//   </Routes>
// </BrowserRouter>

// );



// ReactDOM.render(
//     <React.StrictMode>
//       <CacheProvider value={muiCache}>
//         <ThemeProvider theme={theme}>
//           <App />
//         </ThemeProvider>
//       </CacheProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );


