import Navbar from './Navbar';
import logo from './Logo_laraid.jpeg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>  
      {/* <div>JOB ORIENTED PROGRAM</div> */}
      {/* <Marquee/>      */}
      <div className="nav-area">
        {/* <Link to="/" className="logo">
            <span><img src={logo} alt="Logo" width="60" heigh="30"/></span>
        </Link>         */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;