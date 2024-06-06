import React from 'react';
import './background.css';

const Overview = () => {
  return (
   <div className='bgcolors'>
      <h2>Program Overview:</h2>
      <ul>
        <li>
          <strong>Duration:</strong> 45 to 90 days
        </li>
        <li>
          <strong>Technologies Covered:</strong>
          <ul>
            <li>Front-end: React, React Native, Node.js (Windows OS), Expo Go</li>
            <li>Back-end: Python, Flask</li>
            <li>Database: MySQL on AWS Linux 2/2023</li>
            <li>Cloud Computing: AWS Cloud with EC2, RDS</li>
          </ul>
        </li>
        <li>
          <strong>Schedule:</strong>
          <ul>
            <li>3 weeks for Front-end technologies</li>
            <li>2 weeks for Back-end development</li>
            <li>1 week dedicated to MySQL RDBMS</li>
            <li>1 week for hands-on experience with AWS Cloud (EC2, RDS)</li>
            <li>5-7 weeks allocated for a live project with lab assistance</li>
          </ul>
        </li>
        <li>
          <strong>Expertise:</strong>
          <ul>
            <li>
              Experienced lecturers with over 20 years of industry experience, including tenure in renowned MNCs such
              as IBM, Accenture, TCS, Amex, and State Farm, Sales Force, GuideWire.
            </li>
            <li>
              Faculty with international exposure and US return, bringing a global perspective to the learning
              experience.
            </li>
            <li>
              Guest lectures by esteemed working professionals, chief architects, and solution architects, offering
              invaluable insights from their real-world experiences.
            </li>
          </ul>
        </li>
        <li>
          <strong>Fee Structure:</strong> The program fee ranges from 1.2 Lakhs to 1.5 Lakhs.
        </li>
      </ul>
    </div>     

  );
}

export default Overview;
