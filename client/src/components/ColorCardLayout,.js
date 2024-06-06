import React from 'react';
import '../css/CardLayout.css'; // Import your CSS file for styling
import HelloWorld from '../screens/HelloWorld'
import CounterScreen from '../screens/CounterScreen';
import FormScreen from '../screens/FormScreen';
import ComponentWithSpread from '../screens/ComponentWithSpread';
import NumberList from '../screens/NumberList';
import SimpleList from '../screens/SimpleList';
import ExampleComponent from '../screens/ExampleComponent';
import AddValues from '../screens/AddValues';
import ReducerScreen from '../hooks/ReducerScreen';
import LighterColorExample from './LighterColorExample';
import MultipleStatesExample from '../hooks/MultipleStatesExample';
import RefComponent from '../components/RefComponent';
import ReducerScreen1 from '../hooks/ReducerScreen_1';
import YearMonthSelect from './YearMonthSelect';
import DropdownPicker from './DropdownPicker';
import DatePickerComponent from './DatePickerComponent';
//import NavigationComponent from './NavigationComponent';
import StateDistrictScreen from '../screens/StateDistrictScreen';
import StateDistrictPickerScreen from '../screens/StateDistrictPickerScreen';
import EncryptDecryptScreen from '../screens/EncryptDecryptScreen';
import FetchStatesDBScreen from '../screens/FetchStatesDBScreen';



function ColorCaLayout() { 
  // Map component names to their corresponding components
  const components = {
    HelloWorld,
    CounterScreen,
    FormScreen,   
    NumberList,
    SimpleList,
    ExampleComponent,
    ComponentWithSpread,
    AddValues,
    ReducerScreen,  
    MultipleStatesExample, 
    ReducerScreen1,
    LighterColorExample,    
    RefComponent,
    DropdownPicker,
    DatePickerComponent,
    YearMonthSelect,
    StateDistrictScreen,
    StateDistrictPickerScreen,
    EncryptDecryptScreen,
    FetchStatesDBScreen

  };

  const cards = ["HelloWorld", "CounterScreen", "FormScreen", "NumberList", "SimpleList", "ExampleComponent", "AddValues","ComponentWithSpread","ReducerScreen","MultipleStatesExample","ReducerScreen1","LighterColorExample","RefComponent","DropdownPicker","DatePickerComponent","YearMonthSelect","StateDistrictScreen","StateDistrictPickerScreen", "EncryptDecryptScreen","FetchStatesDBScreen"];

  // Define an array of colors
  //const colors = ['#f0f0f0', '#d3d3d3', '#b0c4de', '#d8bfd8']; // You can add more colors as needed
  // Define an array of different colors
  const colors = ['#d3d3d3', '#33FFC9', '#d8bfd8', '#FFC733','#3333FF', '#FFFF33','#ff79e7','#FF33A1','#3366FF','#FF5733','#f0f0f0', '#b0c4de','#33FF33','#33FFD8', '#FF33FF']; // Add more colors as needed

  return (
    <div className="card-container">
      {cards.map((item, index) => {
        const Component = components[item]; // Get the component reference from the mapping
        const colorIndex = Math.floor(index / 5) % colors.length; // Calculate color index for each row
        return (
          <div className="card" key={index} style={{ backgroundColor: colors[colorIndex] }}>
            <Component />
          </div>
        );
      })}
    </div>
  );
}

export default ColorCaLayout;
