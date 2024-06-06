import { useEffect, useState } from "react";
import axios from '../api/axios';
import {options, optionsYear, expenditureType} from '../utility/Utility';
const WORKORDER_URL = '/api/insertwo'; // matches the back-end webserver in the nodejs course.

function WO() {

  const [status, setStatus] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [month, setMonth] = useState(); 
  const [year, setYear] = useState(); 
  //const [expType, setExpType] = useState(); 
  
  const [inputList, setInputList] = useState([{wodesc:'', wolbrcost:'', womcost:'', wototalcost :'', woadvpaid :'', woexpType:''}]);
  //const [totalCost, setTotalCost] = useState([]);
  
  const handleChange = (e, index) => {
      const {name, value} = e.target;
      const list= [...inputList];
      list[index][name] = value;
      setInputList(list);
    }

  const handleAddmore=()=>{
      setInputList([...inputList, {wodesc:'', wolbrcost:'', womcost:'', wototalcost :'', woadvpaid :'', woexpType:''}])
  }
  const handleRemove=(index) =>{
      const list=[...inputList];
      list.splice(index, 1);
      setInputList(list);

  }
  const handleSubmit = (event) => {
    event.preventDefault();
          
  }
 useEffect(() => {
  const list = inputList.map(obj=>{   
      const tcost = parseFloat(obj.wolbrcost)+parseFloat(obj.womcost);       
      return  {...obj, wototalcost: tcost}; 
    }) 
    setInputList(list);
    
 },[inputList])

  const submitWO = () => {
    let payload = {month: month, year:year, inputList: inputList}    
    try{
        console.log(JSON.stringify(payload));
        axios.post(
        WORKORDER_URL,
        JSON.stringify(payload),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
         }
      ).then((response => {
            console.log(response.data);
            if(response.data.message === 'Work Order data inserted successfully'){
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
    <form  className='formworkorder' onSubmit={handleSubmit}>
     <div>
     <div><center><h5> Major/Minor (Repair(s)/WorkOrder(s)) </h5></center></div>      
     <table><tr><td><label><small>Month: </small>   
        <select  name="month" className='form-input' value={month} onChange={e=>{setMonth(e.target.value)}}  placeholder="Choose Month" >
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
        </select></label></td>
        <td><label><small> Year: </small> 
        <select  name="year" className='form-input' value={year} onChange={e=>{setYear(e.target.value)}} placeholderText="Choose Year"  >
            {optionsYear.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
        </select></label></td></tr>
          {inputList.map((i, index) =>{
            return(
                   index <= 4  &&
              <>
                <tr><label><small> Work Order {index+ 1}: </small></label></tr>
                <tr><td><label><small> Description: </small>
                <textarea className='form-input' name="wodesc" placeholder="Please enter your description here" onChange={e=>handleChange(e,index)} />
                </label></td>
                  <td><label><small>Labor Cost: </small>
                    <input
                      type="number"
                      className='form-input'
                      placeholder="Enter Labor Cost"
                      name="wolbrcost"
                      onChange={e=>handleChange(e,index)} />
                  </label></td>
                  <td><label><small>Material Cost: </small>
                    <input
                      type="number"
                      className='form-input'
                      placeholder="Enter Material Cost"
                      name="womcost"
                      onChange={e=>handleChange(e,index)} />
                  </label></td>
                  <td><label><small>Total Cost: </small>
                    <input
                      type="number"
                      className='form-input'
                      placeholder="Auto Complete"
                      name="wototalcost"  
                      value={i.wototalcost}
                      onChange={e=>handleChange(e,index)}
                    />
                   </label></td></tr>
                   <tr>
                   <td><label><small>Advance Paid: </small>
                    <input
                      type="number"
                      className='form-input'
                      placeholder="Enter Advance Paid Amt"
                      name="woadvpaid"  
                      value={i.woadvpaid}
                      onChange={e=>handleChange(e,index)}
                    />
                   </label></td>
                   <td><label><small>Expenditure Type: </small>   
                    <select  name="woexpType" className='form-input' value={i.woexpType} onChange={e=>handleChange(e,index)}  placeholder="Choose Exp Type">
                    {expenditureType.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                   </select></label></td>
                   </tr>
                                     
                    {
                      inputList.length !==1 &&                      
                         <button className='btn btn-delete' 
                                 type="submit" 
                                 onClick={e=>handleRemove(index)}>Delete</button>
                       
                     } 
                     &nbsp;&nbsp;
                     {
                      inputList.length-1 === index  &&                         
                        <button className='btn btn-success'  
                                type="submit" 
                                onClick={handleAddmore}> Add (+) </button>
                      
                    }
                </>
            );
          })} 
      </table> 
      <p></p>
     <p></p>
      <center><input type="submit"  
       className='btn btn-block1'     
      onClick={submitWO}/><br></br>       
        {status === 'Work Order data inserted successfully' ? <h5 style={{color:'green'}}>{status}</h5> : <h5 style={{color:'red'}}>{status}</h5>} 
      </center>          
     </div>
    </form>     
    </section>  
  );
}
export default WO;