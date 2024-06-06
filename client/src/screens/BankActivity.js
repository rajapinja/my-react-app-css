import { useEffect, useState } from "react";
import axios from '../api/axios';
import { options, optionsYear, paymentType}  from '../utility/Utility'

const COLLECTION_URL = '/api/banktransaction'; // matches the back-end webserver in the nodejs course.


function BankTransactions() {

  const [status, setStatus] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [month, setMonth] = useState(); 
  const [year, setYear] = useState(); 
  
  // Date Picker
  const [startDate, setStartDate] = useState(new Date());

  const [state, setState ] = useState({
    month:"Choose month",
    year:"Choose year",
    bankDeposit:"0",
    bankDepositReason:"",
    bankWithdraw:"0",
    bankWithdrawalReason:"",
    bankCredit:"0",
    bankDebit:"0",
    totalBankBal:""
 });

 // set date
 const handleDateChange = e => {
  setStartDate( e.target.value);
  console.log(startDate);
 } 

 const handleChange = e => {
  setState({   
    ...state,
    [e.target.name]: e.target.value, 
   
  });
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);    
  }

  useEffect(()=>{
  

  },[state.bankDebit, state.bankCredit, state.bankDeposit, state.bankWithdraw, state.totalBankBal])

    const submitColl = (e) => {
      
      try{
        axios.post(
          COLLECTION_URL,
          JSON.stringify({
            month:state.month, 
            year:state.year, 
            bankDeposit:state.bankDeposit,          
            bankDepositReason:state.bankDepositReason,
            bankWithdraw:state.bankWithdraw,
            bankWithdrawalReason:state.bankWithdrawalReason,
            bankDebit:state.bankDebit,       
            bankCredit:state.bankCredit,
            totalBankBal:state.totalBankBal           
          }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }  
        ).then((response => {
          console.log(response.data);
          if(response.data.message === 'Bank Transactional Data inserted successfully'){
            setStatus(response.data.message)
          }else{
            setStatus(response.data.message)
          }
        }));       

      }catch(err){
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400) { 
          setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
      }
  }    
  return (
    <section className='section'>
    <form className='formcoll' onSubmit={handleSubmit}>
    <div>      
     <div><center><h5> Bank Transactions </h5></center></div>
     <div>
     <table><tr><td><label><small> Month: </small>   
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
      </label></td>     
      </tr>          
        <tr><td><label><small> Bank Deposit: </small>   
        <input 
            type="number"
            className='form-input'
            name="bankDeposit"
            value={state.bankDeposit} 
            onChange={handleChange}                     
          />
        </label></td>
        <td><label><small> Bank Deposit Reason: </small>   
          <input 
            type="text"
            className='form-input'
            name="bankDepositReason"
            value={state.bankDepositReason} 
            onChange={handleChange}                    
          />
        </label></td>
        <td><label><small> Bank Withdrawal: </small>   
        <input 
            type="number"
            className='form-input'
            name="bankWithdraw"
            value={state.bankWithdraw} 
            onChange={handleChange}                     
          />
        </label></td>
        <td><label><small> Bank Withdrawal Reason: </small>   
          <input 
            type="text"
            className='form-input'
            name="bankWithdrawalReason"
            value={state.bankWithdrawalReason} 
            onChange={handleChange}                    
          />
        </label></td></tr>
        <tr><td><label><small> Bank Credit: </small> 
          <input 
            type="number"
            className='form-input'
            name="bankCredit"
            value={state.bankCredit}
            onChange={handleChange}
          />
      </label></td>
      <td><label><small> Bank Debit: </small>  
          <input 
            type="number"
            className='form-input'
            name="bankDebit"
            value={state.bankDebit}
            onChange={handleChange}
          />
        </label></td>
        <td><label><small> Total Bank Bal: </small>  
          <input 
            type="number"
            className='form-input'
            name="totalBankBal"
            value={state.totalBankBal}
            onChange={handleChange}
          />
        </label></td>
        </tr>
      </table>
      </div>    
      <p></p>
      <center>
        <input 
        className='btn btn-block1'
        type="submit"    
              name="Submit"
            onClick={submitColl}/>
            <br></br>
            {status === 'Bank Transactional Data inserted successfully' ? <h5 style={{color:'green'}}>{status}</h5> : <h5 style={{color:'red'}}>{status}</h5>} 
        </center> 
      </div> 
     </form> 
    </section>
  );
}
export default BankTransactions;