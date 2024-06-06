import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import { AuthProvider } from '../context/AuthContext';
// import {NavDropdown, Nav} from 'react-bootstrap'

const Navbar = () => {

  const {status, user} = useAuth();
  
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>           
      <NavLink
        to='/register'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
         Register
      </NavLink>       
      <NavLink
        to='/collection'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Collection
      </NavLink>
      <NavLink
        to='/expenses'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Expenses
      </NavLink>
      <NavLink
        to='/workorder'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Workorder
      </NavLink>
      <NavLink
        to='/bankActivity'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        BankActivity
      </NavLink>
      <NavLink
        to='/balance'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Balance
      </NavLink>
      <NavLink
        to='/reports'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Reports
        </NavLink>
        <NavLink
        to='/charts'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Charts
        </NavLink>
        <NavLink
        to='/bankreports'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          BankReports
        </NavLink>
        <NavLink
        to='/download'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Download
        </NavLink>
       <NavLink
        to='/profile'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Profile
        </NavLink>    
    </nav>
  );
};
export default Navbar;
