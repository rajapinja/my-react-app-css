import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import { options, optionsYear}  from '../utility/Utility'

const REPORTS_URL = '/api/selectrepo'; // matches the back-end webserver in the nodejs course.

const Reports =() =>{

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
            <div><center><h5> Maintenance Reports </h5></center></div>
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
                      Get Reports
              </button><br></br> 
              <br></br>
              {status === 'Please change the selection criteria for month and year' ? <h5 style={{color:'red'}}>{status}</h5> : ""}            
              </center> 
            </form><br></br>   

             {/** Data Table for reports */}  
               {/**<hr class="hr-color"></hr>*/}
              {/**  <h5><center> Apartment Monthly Report </center></h5>**/}
             { clickReports == true && <div><h5><center> Apartment Monthly Report </center></h5>
             <div class="container">              
              {monthrepo.map((val) => {    
                  if(status !== 'Please change the selection criteria for month and year' ){    

                 {/* let  totalExpenses = parseInt(val.ecityBill) + parseInt(val.watchmanSal) + parseInt(val.securitySal) + parseInt(val.garbageCharges) ;*/}
                  let  totalExpenses =(val.ecityBill + val.watchmanSal+val.securitySal+val.garbageCharges+val.dieselCharges+val.stationaryCharges+val.electritianCharges+val.lizel+val.sanitizer+val.bathMnt+val.ftips+val.fdeco+val.wMobile+val.prithviMobile+val.brooms+val.misc+val.plumberMnt+val.genMnt+val.cctv+val.liftMnt+val.advpaidAmt)

                    return (  <>
                             
                                                                
                         <div class="item">                        
                            <h5><strong>Collection: </strong></h5>
                            <hr class="hr-collection"></hr>  
                            <strong>{val.month} Month Collection:</strong>  
                            <hr></hr>Mnt Amount       :..........................{val.mntAmount}  
                            <br></br> No of Units     .............................{val.noOfUnits} 
                            <br></br>Shop1 Rent <strong>{val.shop1PayType}</strong>:............................{val.shop1}                         
                            <br></br>Shop2 Rent <strong>{val.shop2PayType}</strong>:............................{val.shop2}
                            <br></br>Bank Credit :..................................{val.bankCredit}
                            <br></br>
                            <br></br><strong>Bank Deposit and Cash Collection:</strong>                            
                            <hr class="hr-bal"></hr>
                            <strong> Bank Deposit    :.......................{val.bankDeposit}
                            <br></br> Cash Collection:.....................{val.cashCollection}</strong>
                            <hr class="hr-bal"></hr>

                            <br></br><strong>Previous Cash and Bank Bal:</strong>
                            <hr></hr>Previous Cash Bal:............................{val.preCashBal}
                            <br></br>Previous Bank Bal: ...........................{val.preBankBal}      
                            <br></br>
                            
                            <br></br><strong>Mnt Due and Advance Paid Flat(s):</strong>
                            <hr></hr>Mnt Due Flat(s)   :...............{val.mntDueFlats}
                            <br></br>Mnt Due Amt :...............{val.mntDueAmt}
                            <br></br>Advance Paid Flat(s)   :...............{val.advPaidFlats}                            
                            <br></br>Advance Paid Amt    :...............{val.AdvPaidAmt}    
                          </div>

                          <div class="item">
                          <h5><strong>Expenses: </strong></h5>  
                            <hr class="hr-expenses"></hr>                          
                            <strong>Bills / Charges:</strong>                        
                            <hr></hr>Electricity Bill <strong>{val.elePayType}</strong>:.........................{val.ecityBill}
                            <br></br>Watchman Sal    :.........................{val.watchmanSal}
                            <br></br>Security Sal <strong>{val.secPayType}</strong>    :.........................{val.securitySal}
                            <br></br>Garbage Charges :.........................{val.garbageCharges}
                            <br></br>Diesel Charges  :.........................{val.dieselCharges}
                            <br></br>Stationary Charges  :.........................{val.stationaryCharges}
                            <br></br>Electritian Charges  :.........................{val.electritianCharges}
                            <br></br>Lizal Charges  :.........................{val.lizel}
                            <br></br>Sinitizer Charges  :.........................{val.sanitizer}
                            <br></br>Bathroom Cleaning  :.........................{val.bathMnt}
                            <br></br>Festive Tips :.........................{val.ftips}
                            <br></br>Festive Decoration :.........................{val.fdeco}
                            <br></br>Watchman Mobile :.........................{val.wMobile}
                            <br></br>Security Mobile :.........................{val.prithviMobile}
                            <br></br>Brooms :.........................{val.brooms}
                            <br></br>Miscellaneous :.........................{val.misc}
                            <br></br>Bank Debit :.........................{val.bankDebit}

                            <br></br><strong>Maintenace :</strong> 
                            <hr></hr>Lift            :.........................{val.liftMnt}
                            <br></br>Generator       :.........................{val.genMnt}
                            <br></br>Plumber         :.........................{val.plumberMnt}
                            <br></br>CCTV            :.........................{val.cctv}   

                            <br></br><strong>Workorder(s) :</strong>
                            <hr></hr>
                                     Work Desc   :...............{val.wodesc}
                            <br></br>Labour Cost   :...............{val.laborCost}
                            <br></br>Material Cost :...............{val.materialCost}
                            <br></br>Total Cost    :...............{val.totalCost}  
                            <br></br>Advance Paid by <strong>{val.expType}</strong> :...............{val.advpaidAmt}

                            
                            <hr class="hr-exp"></hr><strong>Total Expenses:..........Rs.{totalExpenses}/-</strong> 
                            <hr class="hr-exp"></hr>

                            <br></br><strong>Remaining Cash and Bank Bal:</strong>
                            <hr class="hr-bal"></hr>
                                     Cash Bal   :...............{val.cashBal}
                            <br></br>Bank Bal   :...............{val.bankBal}                            
                                                
                          </div><br></br>
                      </>                        
                 )}
             })} 
            </div> </div>
    }         
    </section>
    )
}
export default Reports;