import ActiveLink from '../components/ActiveLinks';
import logo from '../assets/logo_react.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex gap-2 p-2 shadow-md">
      <Link to="/">
        <img src={logo} alt="logo" width={30} />
      </Link>

      <nav className="flex gap-2">
        <ActiveLink route="/" name="Home" />
        <ActiveLink route="/child" name="Child" />
      </nav>
    </header>
  );
}
