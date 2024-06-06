import React, { useState, useEffect } from 'react';
import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint for mobile view
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(true); // Close the menu when an item is selected
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            {isMobile ? (
                 <div >   
                    <span className='titlejop'> <FontAwesomeIcon icon={faCoffee} />  JOB ORIENTED PROGRAM  <FontAwesomeIcon icon={faUsers} />   </span>                   
                    <button className="hamburger-menu" onClick={toggleMenu}>
                        <div className={isMenuOpen ? "hamburger-icon open" : "hamburger-icon"}></div>                        
                    </button>    
                              
                    {isMenuOpen && (
                        <ul className="mobile-menu">
                            {menuItems.map((menu, index) => {
                                const depthLevel = 0;
                                return <MenuItems items={menu} key={index} depthLevel={depthLevel} onClick={() => setIsMenuOpen(!isMenuOpen)} />;
                            })}                         
                        </ul>                        
                    )}
                </div>   
            ) : (
                <ul className="menus">
                     <div style={{marginRight:"120px", marginTop:"8px", color:"yellow"}}> 
                        {/* <i class="fa-solid fa-users"/> */}
                        <FontAwesomeIcon icon={faCoffee} />  JOB ORIENTED PROGRAM  <FontAwesomeIcon icon={faUsers} />   
                    </div>
                    {menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                   
                </ul>
            )}           
           
        </nav>
    );
};

export default Navbar;
