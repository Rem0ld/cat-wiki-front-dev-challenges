import ActiveLink from '../components/ActiveLinks';
import logo from '../assets/cat-wiki-master/CatwikiLogo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex h-20 gap-2 px-4 pt-4 pb-5 md:h-24 md:px-24 md:py-7">
      <Link to="/">
        <img src={logo} alt="logo" width={127} />
      </Link>
    </header>
  );
}
