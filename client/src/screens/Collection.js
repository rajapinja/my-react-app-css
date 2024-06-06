import { useEffect, useState } from "react";
import axios from '../api/axios';
import { options, optionsYear, paymentType}  from '../utility/Utility'

const COLLECTION_URL = '/api/insertcoll'; // matches the back-end webserver in the nodejs course.


function Coll() {

  const [status, setStatus] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [totalCashBal, setTotalCashBal] = useState(0);
  const [totalBankBal, setTotalBankBal] = useState(0);  
  const [totalCashColl, setTotalCashColl] = useState(0);
  const [totalBankDeposit, setTotalBankDeposit] = useState(0);


  // Date Picker
 const [startDate, setStartDate] = useState(new Date());

  const [state, setState ] = useState({
    month:"Choose month",
    myMnt:"Choose Amount",
    units:"41",
    shop1:"13500",
    shop1PayType:"Payment Type",
    shop2:"12300",
    shop2PayType:"Payment Type",
    bankCredit:"0",
    totalCashColl:"",
    totalBankDeposit:"",
    prevCashAmount:"0",
    prevBankBal:"0",     
    year:"",
    
   
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
    //setTotalCashBal(parseInt(state.cashcoll) + parseInt(state.prevCashAmount) + parseInt(state.shop1)); 
    //setTotalBankBal(parseFloat(state.prevBankBal) + parseFloat(state.bankdeposit));
    event.preventDefault();
    console.log(state);    
  }

  useEffect(()=>{

    setTotalCashColl((parseInt(state.myMnt) * parseInt(state.units)) + parseInt(state.shop1));
    setTotalBankDeposit(((41 - parseInt(state.units)) * 1500) + parseInt(state.shop2));

    setTotalCashBal(parseInt(totalCashColl) + parseInt(state.prevCashAmount) ); 
    setTotalBankBal(parseFloat(state.prevBankBal) + parseFloat(totalBankDeposit));

  },[state.myMnt, state.units, totalCashColl, state.prevCashAmount,state.shop1,state.prevBankBal,totalBankDeposit])

    const submitColl = (e) => {
      //setTotalCashBal(parseInt(state.cashcoll) + parseInt(state.prevCashAmount) + parseInt(state.shop1));      
      //setTotalBankBal(parseFloat(state.prevBankBal) + parseFloat(state.bankdeposit));
      console.log(totalCashBal +":"+ totalBankBal)  

      try{
        axios.post(
          COLLECTION_URL,
          JSON.stringify({
            month:state.month,           
            mntAmount:state.myMnt,
            noOfUnits:state.units,
            shop1:state.shop1,
            shop1PayType:state.shop1PayType,
            shop2:state.shop2,
            shop2PayType:state.shop2PayType,
            bankCredit:state.bankCredit,
            cashCollection : totalCashColl,
            //bankDeposit:state.bankdeposit,
            bankDeposit: totalBankDeposit,
            preCashBal:state.prevCashAmount,
            preBankBal:state.prevBankBal,
            totalCashBal:totalCashBal,
            totalBankBal:totalBankBal,
            year:state.year
          }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }  
        ).then((response => {
          console.log(response.data);
          if(response.data.message === 'Collection data inserted successfully'){
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
     <div><center><h5> Monthly Collection </h5></center></div>
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
        <tr><td><label><small> Monthly Mnt: </small>   
          <select name="myMnt" value={state.myMnt} onChange={handleChange} className='form-input'>
          <option value="Choose Amount">Choose Amount</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2500">2500</option>
              <option value="3000">3000</option>
              <option value="3500">3500</option>
          </select>
        </label></td>
        <td><label><small> No of Units: </small>   
          <input 
            type="number"
            className='form-input'
            name="units"
            value={state.units} 
            onChange={handleChange}   
            required         
          />
        </label></td>
        <td><label><small> Prev Cash Balance: </small> 
          <input 
            type="number"
            className='form-input'
            name="prevCashAmount"
            value={state.prevCashAmount}
            onChange={handleChange}
            required
          />
      </label></td>
      <td><label><small> Prev Bank Balance: </small>  
          <input 
            type="number"
            className='form-input'
            name="prevBankBal"
            value={state.prevBankBal}
            onChange={handleChange}
            required
          />
        </label></td>
        </tr><tr>
        <td><label><small>Shop1 Amount: </small>  
          <input 
            type="number" 
            className='form-input'
            name="shop1"
            value={state.shop1} 
            onChange={handleChange} 
            required 
          />
        </label></td>
        <td><label><small> Shop1 Payment Type: </small> 
          <select  name="shop1PayType" className='form-input' value={state.shop1PayType} onChange={handleChange} placeholderText="Choose Pay Type"  >
          {paymentType.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        required
      </select>
      </label></td>
        <td><label><small> Shop2 Amount: </small>  
          <input 
            type="number" 
            className='form-input'
            name="shop2"
            value={state.shop2}
            onChange={handleChange}
            required
          />
        </label></td>
        <td><label><small> Shop2 Payment Type: </small> 
          <select  name="shop2PayType" className='form-input' value={state.shop2PayType} onChange={handleChange} placeholderText="Choose Pay Type"  >
          {paymentType.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        required
      </select>
      </label></td>
        </tr>
        <tr><td><label><small> Cash Collection: </small>  
          <input 
            type="number" 
            className='form-input'
            name="cashcoll"
            value={totalCashColl}
            onChange={handleChange}
            disabled        
          />
        </label></td>        
        <td><label><small> Bank Deposits : </small>  
          <input 
            type="number"
            className='form-input'
            name="bankdeposit"
            value={totalBankDeposit}
            onChange={handleChange}
            disabled
          />
        </label></td>
        <td><label><small> Bank Credits : </small>  
          <input 
            type="number"
            className='form-input'
            name="bankCredit"
            value={state.bankCredit}
            onChange={handleChange}
           />
        </label></td>
        </tr>
            
      {/**<tr><td><label><small> Total Cash Balance: </small> 
          <input 
            type="number" 
            className='form-input'
            name="totalCashBal"
            value={state.totalCashBal}          
            
          />
      </label></td>
      <td><label><small> Total Bank Balance: </small>  
          <input 
            type="number" 
            className='form-input'
            name="totalBankBal"
            value={state.totalBankBal}
                   
          />
        </label></td></tr>*/}
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
            {status === 'Collection data inserted successfully' ? <h5 style={{color:'green'}}>{status}</h5> : <h5 style={{color:'red'}}>{status}</h5>} 
            {"totalCashBal   :"+totalCashBal+" and totalBankBal:   "+totalBankBal}
      </center>  

      </div> 
      
    </form>    
    
    </section>
  );
}

export default Coll;