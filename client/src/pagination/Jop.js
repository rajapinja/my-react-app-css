import React, { useState } from 'react';
import './jop.css';
import Overview from '../pagination/Overview';
import Heading from '../pagination/heading';
import AdditionalBenefits from '../pagination/AdditionalBenefits';
import BonusTopics from '../pagination/BonusTopics';
import WhyToChoose from '../pagination/WhyToChoose';
import Contact from '../pagination/Contact';

function Jop() {
  const [currentPage, setCurrentPage] = useState('overview');

  const handleMenuClick = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
      <>
      <div className="header">
        <h1>Job Oriented Program</h1>
      </div>
      <div class="row">
      <div  class="col-3 menu">
        <ul>
          <li>
            <button className="menu-link-jop" onClick={() => handleMenuClick('overview')}>The Overview</button>
          </li>
          <li>
            <button className="menu-link-jop" onClick={() => handleMenuClick('heading')}>The Heading</button>
          </li>
          <li>
            <button className="menu-link-jop" onClick={() => handleMenuClick('abenefits')}>The Additional Benefits</button>
          </li>
          <li>
            <button className="menu-link-jop" onClick={() => handleMenuClick('bonusTopics')}>The Bonus Topics</button>
          </li>
          <li>
            <button className="menu-link-jop" onClick={() => handleMenuClick('whyToChoose')}>Why To Choose Us</button>
          </li>
          <li>
            <button className="menu-link-jop" onClick={() => handleMenuClick('contact')}>Contact</button>
          </li>
        </ul>
      </div>
      <div className="col-9 right main aside">
        {/* <div class="aside"> */}
           {/* Render content based on the currentPage state */}
          {currentPage === 'overview' && <Overview />}
          {currentPage === 'heading' && <Heading />}
          {currentPage === 'abenefits' && <AdditionalBenefits />}
          {currentPage === 'bonusTopics' && <BonusTopics />}
          {currentPage === 'whyToChoose' && <WhyToChoose />}
          {currentPage === 'contact' && <Contact />}
        {/* </div>        */}
      </div>  
      <div class="footer">
        <p>LARAID SOFTWARE SOLUTIONS PVT LTD.</p>
      </div>    
    </div>
  </>       

  );
}

export default Jop;
