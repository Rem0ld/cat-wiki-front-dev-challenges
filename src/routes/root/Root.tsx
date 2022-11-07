import { Outlet, ScrollRestoration } from 'react-router-dom';

import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col px-4 lg:px-24">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ['/home', '/notifications'];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
    </>
  );
}
