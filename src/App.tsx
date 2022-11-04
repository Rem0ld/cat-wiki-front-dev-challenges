import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Child from './routes/child/Child';
import Home, { homeLoader } from './routes/home/Home';
import Root from './routes/root/Root';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/child',
        element: <Child />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
