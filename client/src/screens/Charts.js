import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
    
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import {useState, useEffect, useReducer} from 'react';
import axios from '../api/axios';
import { options, optionsYear}  from '../utility/Utility'

const REPORTS_URL = '/api/selectrepo'; // matches the back-end webserver in the nodejs course.

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function Charts(){

    const [chartData, setChartData] = useState({
        datasets : [],
    });
 
    const [chartOptions, setChartOptions] = useState({});
    const [monthrepo, setMonthrepo] = useState([]);
    const [expenses, setExpenses] = useState(""); //Sum of all the expenses in that Month
    const [month, setMonth] = useState(""); //set Month
    const [totalBal, setTotalBal] = useState(""); // sum of Cash and Bank Balance
    const [ignore, forceUpdate] = useReducer(x=>x+1,0)
    const [clickReports, setClickReports] = useState(false);

    const [state, setState ] = useState({
        month:"Choose month",             
        year:"Choose year"       
    });
    const [status, setStatus] = useState("");

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
    
   const handleCharts= () =>{ // To get data from backend to feed charts data
            let params = {
                month:state.month,
                year : state.year
            }
            axios.get(REPORTS_URL, {params},         
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
                    setMonthrepo(response.data); 
                    setMonth("PrithviHomes Apartment : "+response.data[0].month);            
                    setExpenses(response.data[0].watchmanSal+response.data[0].securitySal+response.data[0].ecityBill+response.data[0].garbageCharges+response.data[0].liftMnt+response.data[0].genMnt+ response.data[0].genMnt+response.data[0].plumberMnt+response.data[0].dieselCharges+response.data[0].seepageCharges+ response.data[0].stationaryCharges+response.data[0].cctv+response.data[0].electritianCharges+response.data[0].sanitizer+ response.data[0].lizel+response.data[0].bathMnt+response.data[0].ftips+response.data[0].fdeco+ response.data[0].wMobile+response.data[0].prithviMobile+response.data[0].brooms + response.data[0].totalCost);          
                    setTotalBal(response.data[0].cashCollection+response.data[0].bankBal - (response.data[0].watchmanSal+response.data[0].securitySal+response.data[0].ecityBill+response.data[0].garbageCharges+response.data[0].liftMnt+response.data[0].genMnt+ response.data[0].genMnt+response.data[0].plumberMnt+response.data[0].dieselCharges+response.data[0].seepageCharges+ response.data[0].stationaryCharges+response.data[0].cctv+response.data[0].electritianCharges+response.data[0].sanitizer+ response.data[0].lizel+response.data[0].bathMnt+response.data[0].ftips+response.data[0].fdeco+ response.data[0].wMobile+response.data[0].prithviMobile+response.data[0].brooms + response.data[0].totalCost));
                    setStatus(response.data.message)  
                    setClickReports(true)            
                  }
                
            });

            //Set Chart Options 
      setChartOptions({
        responsive : true,
        plugins:{
         Legend:{
             position : "top"
         },
         title : { 
             display : true,
             text : month,
         },
        },
     });

     //setChartData 
     const labels = ["Collection", "Expenses", "Cash Bal", "Bank Bal", "Total Bal"];
     setChartData({
            labels,
            datasets:[{
                label : "Collection, Expenses and Balance chart",
                data :[monthrepo.map(val =>val.cashCollection), expenses, monthrepo.map(val =>val.cashBal), monthrepo.map(val =>val.preBankBal), totalBal],
                backgroundColor : ["rgba(23,165,230,0.4)", "rgba(93,115,180,0.5)", "rgba(255,0,0,0.1)","rgba(73,65,250,0.4)", "rgba(238,130,238   ,0.4)"],
                borderColor : "black",
                borderWidth : .5
            }],
        });
    }
    
    return(
        <section className='section'>
          <form className="formworkorder" onSubmit={handleSubmit}>
          <div><center><h5> Monthly Charts </h5></center></div>   
          <center>      
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
                </label></td></tr>
                </table> <br></br>  
                <button 
                    className='btn btn-block1' 
                    onClick={handleCharts}>
                        Get Charts
                </button><br></br>  
                <br></br>
              {status === 'Please change the selection criteria for month and year' ? <h5 style={{color:'red'}}>{status}</h5> : ""}                      
            </center>
            </form><br></br>
            {
                clickReports == true &&
                <div id="wo">
                    <Bar options = {chartOptions} data={chartData} redraw={true}/>
                </div>   
            }                    
        </section>
    );
}
export default Charts;