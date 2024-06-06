import { useState } from "react";
import axios from '../api/axios';
import {options, optionsYear} from '../utility/Utility';

const EXCEBAL_URL = '/api/insertexcebal'; // matches the back-end webserver in the nodejs course.

function Bal() {

  const [status, setStatus] = useState("");
  const [errMsg, setErrMsg] = useState('');

  const [state, setState ]= useState({
    month:"Choose month",    
    cfCashBal:"50000",
    cfBankBal:"390000",
    mntDueFlats:"405(3)",
    dueAmount:"4500",
    advFlats:"107 paid until Dec 2022",
    advAmount:"18000",
    year:""
 });

 const handleChange = e => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  })
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
        
  }

  const submitBal = () => {
    try{
        axios.post(
        EXCEBAL_URL,
        JSON.stringify({
          month:state.month,
          cashBal:state.cfCashBal,
          bankBal:state.cfBankBal,
          mntDueFlats:state.mntDueFlats,
          mntDueAmt:state.dueAmount,
          advPaidFlats:state.advFlats,
          AdvPaidAmt:state.advAmount,
          year:state.year
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
        ).then((response => {
          console.log(response.data);
          if(response.data.message === 'Balance data inserted successfully'){
            setStatus(response.data.message)
          }else{
            setStatus(response.data.message)
          }
        }));
    //setState("");
  }catch(err){if (!err?.response) {
      setErrMsg('No Server Response');
    } else if (err.response?.status === 400) { 
      setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
    } else {
      setErrMsg('Login Failed');
    }}    
  }
  return (
    <section className='section'>     
    <form className="formbal" onSubmit={handleSubmit}>      
    <div>      
    <div><center><h5>Carry Over Balance, Dues, Advances</h5></center></div>
    <table><tr>  
      <td><label><small>Month: </small>   
      <select  name="month" className='form-input' value={state.month} onChange={handleChange}  placeholder="Choose Month" >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
        </select>
      </label></td>
      <td><label><small> Year: </small> 
      <select  name="year" className='form-input' value={state.year} onChange={handleChange} placeholderText="Choose Year"  >
        {optionsYear.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
    </select>
        </label></td></tr>
       <tr><td><label><small> Cash Balance: </small> 
          <input 
            type="number" 
            className='form-input'
            name="cfCashBal"
            value={state.cfCashBal || "000.00"}
            onChange={handleChange}
          />
      </label></td> 
      <td><label><small> Bank Balance: </small>  
          <input 
            type="number" 
            className='form-input'
            name="cfBankBal"
            value={state.cfBankBal || "000.00"}
            onChange={handleChange}
          /></label></td></tr>
         <tr><td><label><small> Mnt Due Flats: </small>  
              <input 
                type="text"
                className='form-input'
                name="mntDueFlats"
                value={state.mntDueFlats}
                onChange={handleChange}
              />
          </label></td>
          <td><label><small> Due Amount: </small>  
              <input 
                type="number" 
                className='form-input'
                name="dueAmount"
                value={state.dueAmount}
                onChange={handleChange}
              /></label></td>
          <td><label><small> Adv Paid Flats:</small>  
              <input 
                type="text" 
                className='form-input'
                name="advFlats"
                value={state.advFlats}
                onChange={handleChange}
              /> </label></td>
          <td><label><small> Adv Amount: </small>  
                <input 
                  type="number" 
                  className='form-input'
                  name="advAmount"
                  value={state.advAmount}
                  onChange={handleChange}
                  />
          </label></td></tr></table> 
          <p></p>
          <center><input type="submit"            
           className='btn btn-block1' 
           name="Submit"
           onClick={submitBal}/><br></br>  
           {status === 'Balance data inserted successfully' ? <h5 style={{color:'green'}}>{status}</h5> : <h5 style={{color:'red'}}>{status}</h5>} 
           </center> 
         </div>
         
    </form>   
    </section>
  );
}
export default Bal;