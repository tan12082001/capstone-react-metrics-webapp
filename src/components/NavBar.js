import { Link, useLocation } from 'react-router-dom';
import {
  MicIcon, SettingIcon, LogoIcon, BackwardIcon,
} from './Icons';

const NavBar = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/items');
  return (
    <nav>
      <div className="logo-heading">
        {isDetailsPage ? (
          <Link to="/">
            <BackwardIcon />
          </Link>
        ) : (
          <LogoIcon />
        )}
        <h1>EarthQuakes</h1>
      </div>
      <div className="nav-icons">
        <MicIcon />
        <SettingIcon />
      </div>
    </nav>
  );
};

export default NavBar;
