
import { useState } from "react";
import axios from '../api/axios';
import { options, optionsYear, paymentType}  from '../utility/Utility'

const EXPENSES_URL = '/api/insertexp'; // matches the back-end webserver in the nodejs course.

function Exp() {

  const [state, setState ]= useState({
      month:"Choose month",
      wsal:"10500",
      ssal:"13000",
      ebill:"25000",
      garbage:"5000",
      lift:"1000",
      plumber:"2000",
      diesel:"1700",
      generator:"1000",
      wmobile:"155",
      aptmobile:"155",
      cctv:"00",
      echarges:"00",
      sanitizer:"00",
      lizel:"00",
      brooms:"00",  
      seepage:"00",
      bathcleaning:"00",
      ftips:"00",
      fdeco:"00", 
      misccharges:"00",
      stationary:"00",
      year:"",
      bankDebit:"0"
 });

 const [status, setStatus] = useState("");
 const [errMsg, setErrMsg] = useState('');

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

  const submitExpenses = () => {

    try{
      axios.post(
        EXPENSES_URL,
        JSON.stringify({  
          month:state.month,   
          watchmanSal:state.wsal,
          securitySal:state.ssal,
          ecityBill:state.ebill,
          garbageCharges:state.garbage,
          liftMnt:state.lift,
          genMnt:state.generator,
          plumberMnt:state.plumber,
          dieselCharges:state.diesel,
          seepageCharges:state.seepage,
          stationaryCharges:state.stationary,
          brooms:state.brooms,
          cctv:state.cctv,
          electritianCharges:state.echarges,
          sanitizer:state.sanitizer,
          lizel:state.lizel,
          bathMnt:state.bathcleaning,
          ftips:state.ftips,
          fdeco:state.fdeco,
          wMobile:state.wmobile,
          prithviMobile:state.aptmobile,
          misc:state.misccharges,
          year:state.year,
          secPayType:state.secPayType,
          elePayType:state.elePayType,
          bankDebit:state.bankDebit
        }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
      ).then((response => {  
        console.log(response.data);
          if(response.data.message === 'Expenses data inserted successfully'){
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
     //setState("");  

  return (
    <section className='section'>
      <form className="formexp" onSubmit={handleSubmit}>            
        <div>
        <div><center><h5> Monthly Expenses </h5></center></div>
        <table><tr><td>
        <label><small> Month : </small>            
            <select  name="month" className='form-inputexp' value={state.month} onChange={handleChange} defaultValue={"default"} >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
        </label>
        </td>
        <td><label><small>  Year  : </small> 
          <select  name="year" className='form-inputexp' value={state.year} onChange={handleChange} defaultValue={"default"} >
            {optionsYear.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
        </select>
        </label></td> </tr>
        <tr><td><label><small>Watchman Sal: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="wsal"
                value={state.wsal || "10500"}
                onChange={handleChange}
                required
              />
          </label></td>
          <td><label><small> Security Sal: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="ssal"
                value={state.ssal || "14000"}
                onChange={handleChange}
                required
              />
          </label></td>
          <td><label><small> Security Payment Type: </small> 
            <select  name="secPayType" className='form-input' value={state.secPayType} onChange={handleChange} placeholderText="Choose Pay Type"  >
            {paymentType.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
            required
          </select>
        </label></td>
        <td><label><small> Electricity Bill Amount: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="ebill"
                value={state.ebill}
                onChange={handleChange}
                required
              />
          </label></td>
          <td><label><small> Electricity Payment Type: </small> 
            <select  name="elePayType" className='form-input' value={state.elePayType} onChange={handleChange} placeholderText="Choose Pay Type"  >
            {paymentType.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
            required
          </select>
        </label></td>
        </tr>
          <tr><td><label><small> Garbage Bill Amount: </small> 
              <input 
                type="number"
                className='form-inputexp'
                name="garbage" 
                value={state.garbage || "5000"}
                onChange={handleChange}                
              />
          </label></td>
          <td><label><small>Lift Mnt Amount: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="lift"
                value={state.lift || "1500"}
                onChange={handleChange}               
              />
          </label></td>      
          <td><label><small>Plumber Mnt Amount: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="plumber"
                value={state.plumber || "2000"}
                onChange={handleChange}
              />
          </label></td>
          <td><label><small>Diesel Amount: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="diesel"
                value={state.diesel}
                onChange={handleChange}                
              />
          </label></td>
          <td><label><small>CCTV Mnt Amount: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="cctv"
                value={state.cctv}
                onChange={handleChange}
              />
            </label></td></tr>
           <tr><td><label><small>Electritian Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="echarges"
                value={state.echarges}
                onChange={handleChange}
              />
            </label></td>          
          <td><label><small>Sanitizer Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="sanitizer"
                value={state.sanitizer}
                onChange={handleChange}
              />
          </label></td>
          <td><label><small>Lizel Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="lizel"
                value={state.lizel}
                onChange={handleChange}
              />
          </label></td>
          <td><label><small>Brooms Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="brooms"
                value={state.brooms }
                onChange={handleChange}
              />
          </label></td>          
          <td><label><small>Stationary Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="stationary"
                value={state.stationary }
                onChange={handleChange}
              />
          </label></td></tr>
          <tr><td><label><small>Seepage Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="seepage"
                value={state.seepage}
                onChange={handleChange}
              />
          </label></td>
          <td><label><small>Generator Mnt Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="generator"
                value={state.generator}
                onChange={handleChange}
              />
          </label></td>
          <td> <label><small>Festival Tips: </small> 
                  <input 
                    type="number" 
                    className='form-inputexp'
                    name="ftips"
                    value={state.ftips}
                    onChange={handleChange}
                  />
              </label></td>          
              <td><label><small>Festival Decoration: </small> 
                  <input 
                    type="number"
                    className='form-inputexp'
                    name="fdeco"
                    value={state.fdeco}
                    onChange={handleChange}
                  />
              </label></td>
              <td><label><small>BathRoom Cleaning Charges: </small> 
              <input 
                type="number" 
                className='form-inputexp'
                name="bathcleaning"
                value={state.bathcleaning}
                onChange={handleChange}
              /> 
              </label></td></tr>
              <tr><td><label><small>Misc Charges: </small> 
                  <input 
                    type="number"
                    className='form-inputexp'
                    name="misccharges"
                    value={state.misccharges}
                    onChange={handleChange}
                  />
              </label></td>
              <td><label><small>Prithvi Mobile Charges: </small> 
                  <input 
                    type="number"
                    className='form-inputexp'
                    name="aptmobile"
                    value={state.aptmobile}
                    onChange={handleChange}
                  />
              </label> </td>  
              <td><label><small>Watchman Mobile Charges: </small> 
                  <input 
                    type="number"
                    className='form-inputexp' 
                    name="wmobile"
                    value={state.wmobile}
                    onChange={handleChange}
                  />
              </label></td>
              <td><label><small>Bank Debit: </small> 
                  <input 
                    type="number"
                    className='form-inputexp' 
                    name="bankDebit"
                    value={state.bankDebit}
                    onChange={handleChange}
                  />
              </label></td>
              </tr></table>
        <p></p>
        <p></p>
          <center>
          <input type="submit" 
            className='btn btn-block1'   
            name="Submit"
            onClick={submitExpenses}/><br></br> 
            {status === 'Expenses data inserted successfully' ? <h5 style={{color:'green'}}>{status}</h5> : <h5 style={{color:'red'}}>{status}</h5>} 
          </center>         
       </div>  
      </form> 
    </section>   
  );
}

export default Exp;