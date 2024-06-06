import React, { useState } from 'react';
import './Pagination.css';
import Overview from '../pagination/Overview';
import Heading from '../pagination/heading';
import AdditionalBenefits from '../pagination/AdditionalBenefits';
import BonusTopics from '../pagination/BonusTopics';
import WhyToChoose from '../pagination/WhyToChoose';
import Contact from '../pagination/Contact';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState('overview');

  const handleMenuClick = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <div className="header-page">
        <h1 style={{justifyContent:'center'}}>Job Oriented Program</h1>
      </div>      
      <div className="main_pagenation">
        {currentPage === 'overview' && <Overview />}
        {currentPage === 'heading' && <Heading />}
        {currentPage === 'abenefits' && <AdditionalBenefits />}
        {currentPage === 'bonusTopics' && <BonusTopics />}
        {currentPage === 'whyToChoose' && <WhyToChoose />}
        {currentPage === 'contact' && <Contact />}
      </div>
      <div className="pagination">
        <ul className="pagination-list">
         <li>
            <button className="menu-link" onClick={() => handleMenuClick('*')}>
                &laquo;
            </button>
          </li>
      
          <li>
            <button className={`menu-link ${currentPage === 'overview' ? 'active' : ''}`} onClick={() => handleMenuClick('overview')}>
              1
            </button>
          </li>
          <li>
            <button className={`menu-link ${currentPage === 'heading' ? 'active' : ''}`} onClick={() => handleMenuClick('heading')}>
              2
            </button>
          </li>
          <li>
            <button className={`menu-link ${currentPage === 'abenefits' ? 'active' : ''}`} onClick={() => handleMenuClick('abenefits')}>
              3
            </button>
          </li>
          <li>
            <button className={`menu-link ${currentPage === 'bonusTopics' ? 'active' : ''}`} onClick={() => handleMenuClick('bonusTopics')}>
              4
            </button>
          </li>
          <li>
            <button className={`menu-link ${currentPage === 'whyToChoose' ? 'active' : ''}`} onClick={() => handleMenuClick('whyToChoose')}>
              5
            </button>
          </li>
          <li>
            <button className={`menu-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')}>
              6
            </button>
          </li>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('*')}>
                &raquo;
            </button>
          </li>      
        </ul>
      </div>     
    </>
  );
};

export default Pagination;
