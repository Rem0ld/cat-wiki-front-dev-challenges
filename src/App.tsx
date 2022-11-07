import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Details from './routes/Details/Details';
import Home, { homeLoader } from './routes/home/Home';
import MostSearched, {
  mostSearchLoader,
} from './routes/MostSearched/MostSearched';
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
        loader: mostSearchLoader,
        path: '/most-searched',
      },
      {
        element: <Details />,
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
