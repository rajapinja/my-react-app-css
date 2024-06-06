// App.js
import React from 'react';
import { BrowserRouter as Router, Outlet, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import '../css/navbar.css';



const AppNavigator = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>   
            <li>
              <Link to="/register">register</Link>
            </li>  
            <li>
              <Link to="/login">Login</Link>
            </li>   
            <li>
              <Link to="/ids">ImageDisplayScreen</Link>
            </li>    
            <li>
              <Link to="/abc">about</Link>
            </li>   
            <li>
              <Link to="/dp">DatePicker</Link>
            </li>    
          </ul>
        </nav>
        <AppRoutes/>
       <Outlet/>      
      </div>
    </Router>
  );
};

export default AppNavigator;
