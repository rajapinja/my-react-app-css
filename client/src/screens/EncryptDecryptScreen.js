import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';


const EncryptDecryptScreen = () => {

    const [encryptData, setEncryptData] = useState('');
    const [encryptedData, setEncryptedData] = useState('');

    const [decryptData, setDecryptData] = useState('');
    const [decryptedData, setDecryptedData] = useState('');

    const handleEncrypt = async () => {

        console.log("BASE_URL :", BASE_URL);
        console.log("Inside handleEncrypt and encryptData: ",encryptData)    
        try {                       
            // Example GET request with query parameters
            await fetch(`${BASE_URL}/api/encrypt?encryptData=RAJAPINJA`,   
            {method: 'GET'})
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    console.log(JSON.stringify(response));
                })
                .then(data => {
                    console.log('Response from backend:', JSON.stringify(data.encryptedData));
                })
                .catch(error => {
                    console.error('Error:', error);
                });
                    } catch (error) {
                        console.error('Error:', error);
                    }        
    }

   
    const handleDecrypt = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/decrypt?`, 
            { encryptedData: decryptData }
            );
            console.log("decryptedData :", response.data.decryptedData);
            setDecryptedData(response.data.decryptedData);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <>
            <h4>-: Encrypt and Decrypt Data :-</h4>
           
            <div>               
                 <input
                    type="text"
                    value={encryptData}
                    onChange={(event) => setEncryptData(event.target.value)}
                    required
                    placeholder='Enter Text to Encrypt'
                /> 
                <button name="EncryptData" onClick = {handleEncrypt} > Encrypt Data </button>
                {encryptedData}
            </div>
           
            <hr></hr>

            <div>
                <input
                    type="text"
                    value={decryptData}
                    onChange={(event) => setDecryptData(event.target.value)}
                    placeholder='Enter Text to Decrypt'
                />               
                <button name="EncryptData" onClick = {handleDecrypt}  > Decrypt Data </button>    
                {decryptedData}          
            </div>
        </>
    );

};
export default EncryptDecryptScreen;