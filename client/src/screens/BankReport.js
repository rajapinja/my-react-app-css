import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import { options, optionsYear}  from '../utility/Utility'

const REPORTS_URL = '/api/selectrepo'; // matches the back-end webserver in the nodejs course.

const BankReports =() =>{

    const [monthrepo, setMonthrepo] = useState([]);
    const [status, setStatus] = useState("");
    const [totalExpenses, setTotalExpenses] = useState("");
    const [clickReports, setClickReports] = useState(false);

    const [state, setState ] = useState({
          month:"Choose month",             
          year:"Choose year"       
    });

    const handleSubmit = (event) => {       
          event.preventDefault();
          console.log(state);    
    }
    
    const handleChange = e => {
            setState({   
            ...state,
            [e.target.name]: e.target.value,          
            });
    }


    const handleReports = () =>{
      const params ={
        month: state.month,
        year : state.year
      }     
      axios.get(REPORTS_URL,{params},
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }  
      ).then((response) =>{
        console.log(response.data);
        if(response.data.message === 'Please change the selection criteria for month and year'){
          setStatus(response.data.message)
          setClickReports(false) 
        }else{
          setStatus(response.data.message);
          setMonthrepo(response.data);
          setClickReports(true)         
        }
      });
        
    }    
    return(
         
        <section className='section'>
           <form className="formworkorder" onSubmit={handleSubmit}>
            <br></br>
            <div><center><h5> Bank Transactional Reports </h5></center></div>
            <center>      
            <table><tr><td>
              <label><small> Month: </small>   
                <select  name="month" className='form-input' value={state.month} onChange={handleChange}  placeholder="choose month" >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label></td>
                <td><label><small> Year: </small> 
                <select  name="year" className='form-input' value={state.year} onChange={handleChange} placeholderText="choose year"  >
                    {optionsYear.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                </label></td></tr>
              </table> <br></br>  
              <button 
                  className='btn btn-block1' 
                  onClick={handleReports}>
                      Bank Reports
              </button><br></br> 
              <br></br>
              {status === 'Please change the selection criteria for month and year' ? <h5 style={{color:'red'}}>{status}</h5> : ""}            
              </center>              
            </form><br></br>
            {/** Data Table for reports, <hr class="hr-color"></hr>*/} 
              {clickReports && <div><h5><center> Monthly Bank Report </center></h5>
              <div class="container">
              {monthrepo.map((val) => {    
                  if(status !== 'Please change the selection criteria for month acnd year' ){    

                 {/* let  totalExpenses = parseInt(val.ecityBill) + parseInt(val.watchmanSal) + parseInt(val.securitySal) + parseInt(val.garbageCharges) ;*/}
                  let  totalExpenses =(val.ecityBill + val.watchmanSal+val.securitySal+val.garbageCharges+val.dieselCharges+val.stationaryCharges+val.electritianCharges+val.lizel+val.sanitizer+val.bathMnt+val.ftips+val.fdeco+val.wMobile+val.prithviMobile+val.brooms+val.misc+val.plumberMnt+val.genMnt+val.cctv+val.liftMnt+val.advpaidAmt)

                    return (  <>
                             
                                                                
                         <div class="item">                        
                            <br></br><strong>Bank Deposit:</strong>                            
                            <hr class="hr-bal"></hr>
                            Bank Deposit    :.......................{val.bankDeposit}
                            <br></br> Deposit Reason   :.......................{val.depositReason}
                            <br></br> 
                            <br/><strong>Previous Bank Bal:</strong>   
                            <hr class="hr-bal"></hr>                        
                            Previous Bank Bal: ...........................{val.preBankBal}      
                            <br></br>  
                          </div>

                          <div class="item"> 
                          <br/><strong>Bank Debit / Credit:</strong>   
                          <hr class="hr-bal"></hr>  
                            Bank Credit :.........................{val.bankCredit}    
                            <br></br>Bank Debit :.........................{val.bankDebit} 
                            <br></br> 
                          <br></br><strong>Bank Withdrawal:</strong>                            
                            <hr class="hr-exp"></hr>
                            Bank Withdrawal    :.......................{val.bankWithdrawal}              
                            <br></br> Withdrawal Reason   :.......................{val.withdrawalReason} 
                            <br></br> 
                          <br></br><strong>Remaining Bank Bal:</strong>
                            <hr class="hr-bal"></hr>                                   
                            Bank Bal   :...............Rs.{val.totalBankBal}                         
                                                
                          </div><br></br>
                      </>                        
                 )}
             })} 
            </div></div>  
        }          
    </section>
    )
}
export default BankReports;