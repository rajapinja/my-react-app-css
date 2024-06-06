import { useState } from 'react';
import StatePicker from '../components/StatePicker';
import DistrictPicker from '../components/DistrictPicker';


function StateDistrictPickerScreen() {


    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedState, setSelectedState] = useState('');

    const handleChangeState = (selectedOption) => {
        setSelectedState(selectedOption);
        console.log(`Selected state:`, selectedOption);
    };

    const handleChangeDistrict = (selectedOption) => {
        setSelectedDistrict(selectedOption);
        console.log(`Selected district:`, selectedOption);
    };


    return (
        <div>
            <h4>Fetching Data from Python Back-end (File Object) and Displaying them here</h4>
            <p>List of States and its Districts by Picker components</p>

            <StatePicker
                selectedValue={selectedState}
                onChange={handleChangeState}
            />
            {/* Conditionally render DistrictPicker only when a state is selected */}
            {selectedState && (
                <DistrictPicker
                    selectedValue={selectedDistrict}
                    onChange={handleChangeDistrict}
                    selectedState={selectedState}
                />
            )}

        </div>
    );

}
export default StateDistrictPickerScreen






