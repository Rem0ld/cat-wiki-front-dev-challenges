import { Outlet } from 'react-router-dom';

import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
