import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { url } from './api/constants';
import Details from './routes/Details/Details';
import Home, { homeLoader } from './routes/home/Home';
import MostSearched from './routes/MostSearched/MostSearched';
import Root from './routes/root/Root';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        loader: homeLoader,
        path: '/',
      },
      {
        element: <MostSearched />,
        path: '/most-searched',
      },
      {
        element: <Details />,
        loader: async ({ params, request }) => {
          return fetch(`${url}breed/${params.id}`, {
            signal: request.signal,
          });
        },
        path: '/cat/:id',
      },
    ],
    element: <Root />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
