import react, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

function StateDistrictScreen(){

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');   

    useEffect (() =>{
        fetchStates();
    },[])

    const fetchStates = async () => {
         await axios.get('http://localhost:5006/api/fetchstates') 
        .then(response => {
            console.log("We have received response from PYTHON..!");
            console.log("states :", response.data.states);
            setStates(response.data.states);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })    
    }

    const fetchDistricts= async(selectedState)=>{

        await axios.get('http://localhost:5006/api/fetchdistricts?',{
            params :{  state_id : selectedState     }
        })            
        .then(response => {
          //  console.log("We have received response from PYTHON..!");
          console.log("districts :", response.data.districts);
          setDistricts(response.data.districts);
        }).catch(error => {            
            console.error('Error:', error.message);        
        })
    };

    const optionsStates = states.map((state) => ({
        value: state,
        label: state
      }));

      const handleChangeState = (selectedOption) => {
        setSelectedState(selectedOption);
        console.log(`Selected state:`, selectedOption);
        fetchDistricts(selectedOption.value);
      };

    const options = districts.map((district) => ({
        value: district,
        label: district
      }));
    
      const handleChangeDistrict = (selectedOption) => {
        setSelectedDistrict(selectedOption);
        console.log(`Selected district:`, selectedOption);
      };
    

    return (
        <div>
         <h4>Fetching Data from Python Back-end and Displaying them here</h4>   
         <p>List of States and its Districts</p>
            <div  style={{ marginTop: 10 }}>
                <Select
                    placeholder="Select a state..."
                    value={selectedState}
                    onChange={handleChangeState}
                    options={optionsStates}          
                />
            </div>                  
           
             <div  style={{ marginTop: 10 }}>
                <Select
                    placeholder="Select a district..."
                    value={selectedDistrict}
                    onChange={handleChangeDistrict}
                    options={options}           
                /> 
            </div>  
            
        </div>
    );

}
export default StateDistrictScreen






