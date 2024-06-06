import React, { useEffect, useState } from "react";

import { CSVLink } from "react-csv";
import {Button} from 'react-bootstrap';
// import { json2csv ,Json2CsvTransform} from "json2csv";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faFacebookF, faTwitter, faWhatsapp, faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons';


const headers = [
    { label: "S.No", key: "S.No" },
    { label: "Rceipts Details", key: "RceiptsDetails" },    
    { label: "Cash", key: "details.Cash" },
    { label: "IOBBank", key: "details.IOBBank" },
   
  ];
  const data = [
    { details : {Cash : "18000", IOBBank: "39000"}},
    { details : {Cash : "18000", IOBBank: "39000"}},
    { details : {Cash : "18000", IOBBank: "39000"}},
    { details : {Cash : "18000", IOBBank: "39000"}},
];

/**
const headers = [
     { label: "S.No", key: "S.No" },
    { label: "Payment Details", key: "Payment Details" },
    { label: "Cash", key: "Cash" },
    { label: "Bank", key: "Bank" },
    { label: 'First Name', key: 'details.firstName' },
    { label: 'Last Name', key: 'details.lastName' },
    { label: 'Job', key: 'job' },
  ];
  
 const data = [
    { details: { firstName: 'Ahmed', lastName: 'Tomi' }, job: 'manager'},
    { details: { firstName: 'John', lastName: 'Jones' }, job: 'developer'},
  ];**/

function Download(){
     return (  
        <section className='section'>
             <div id="profile">  
                <CSVLink data={data} headers={headers}>
                    <center><button className='btn btn-block1'> CSV </button></center>
                </CSVLink>
                <hr />
                <center>
                <p className="estext">
                  Login with social media
                </p>
                <div>
                  <SocialIcon network="facebook" url="https://facebook.com/" style={{ height: 35, width: 35 }} />&nbsp;&nbsp;&nbsp;
                  <SocialIcon network="twitter" url="https://twitter.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
                  <SocialIcon network="google" url="https://google.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
                  <SocialIcon network="whatsapp" url="https://whatsapp.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
                  <SocialIcon network="github" url="https://github.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
                  <SocialIcon network="linkedin" url="https://linkedin.com/" style={{ height: 35, width: 35 }}/>
                </div>

                  {/*<SocialIcon url="https://facebook.com/in/jaketrent"  style={{ height: 50, width: 50 }} /> &nbsp;&nbsp;&nbsp;             
                    <SocialIcon url="https://twitter.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;
                    <SocialIcon url="https://googleplus.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;
                    <SocialIcon url="https://whatsapp.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;
                    <SocialIcon url="https://github.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;
                    <SocialIcon url="https://linkedin.com/in/jaketrent" /> */}
                <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
                 {/** <Button className="social-icon facebook">
                    <FontAwesomeIcon icon={faFacebookF}/>                    
                  </Button>&nbsp;&nbsp;&nbsp;
                  <Button className="social-icon twitter">                   
                    <FontAwesomeIcon icon={faTwitter}/>
                  </Button>&nbsp;&nbsp;&nbsp;
                  <button className="social-icon whatsapp">                   
                    <FontAwesomeIcon icon={faWhatsapp}/>
                  </button>&nbsp;&nbsp;&nbsp;
                  <Button className="social-icon google">                   
                    <FontAwesomeIcon icon={faGoogle}/>
                  </Button>&nbsp;&nbsp;&nbsp;
                  <Button className="social-icon github">                   
                    <FontAwesomeIcon icon={faGithub}/>
                  </Button>&nbsp;&nbsp;&nbsp;  */}
                </div>
                </center>                
            </div>
        </section>  
    );
}
export default Download;


