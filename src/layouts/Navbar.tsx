import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../assets/cat-wiki-master/CatwikiLogo.svg';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="flex h-20 items-center justify-between gap-2 px-4 pt-4 pb-5 md:h-24 md:px-24 md:py-7">
      <Link to="/">
        <img src={logo} alt="logo" width={127} />
      </Link>
      {location.pathname !== '/' && (
        <button onClick={() => navigate(-1)}>
          <FaLongArrowAltLeft size={34} />
        </button>
      )}
    </header>
  );
}
