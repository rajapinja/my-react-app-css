import {Checkbox} from '../utility/checkbox2';
import { useState } from 'react'; 


function Demo() { 
  
  const [paymentType, setPaymentType] = useState("") 
  const [preferences, setPreferences] = useState( { 'Cash': false, 'Online': false, 'UPI': false } ) 
  
  function togglePreference(payment) { 
    
    preferences[payment] = !preferences[payment]; 
    
    // Update animal likings 
    let paymentType="";
    for ( var payment in preferences ) { 

      console.log(payment);
      
      if ( preferences[payment] ) {         
        paymentType += payment + " ";        
      }      
    } 
    //newLikings +=  " You dont like any pets.....! ";
    setPaymentType(paymentType); 
    
  } 
  
  return ( 
    
    <div> 
    
      <Checkbox onText="Cash" offText="Not a Cash Payment" togglePreference={togglePreference} payment="Cash" /> 
      <Checkbox onText="Online" offText="Not a Online Payment" togglePreference={togglePreference} payment="Online" /> 
      <Checkbox onText="UPI" offText="Not a UPI Payment" togglePreference={togglePreference} payment="UPI" /> 
      
      <br/>
      
      <h1> My analysis of you: You like {paymentType} </h1> 
      
    </div> 
    
  ) 
  
} 

export default Demo;