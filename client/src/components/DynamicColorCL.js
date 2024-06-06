
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

function  DynamicColorCL() { 
   
 // Map component names to their corresponding components
 const components = {
    HelloWorld,
    CounterScreen,
    FormScreen,
    ComponentWithSpread,
    NumberList,
    SimpleList,
    ExampleComponent,
    AddValues
  };

const cards = ["HelloWorld", "CounterScreen", "FormScreen","ComponentWithSpread", "NumberList", "SimpleList", "ExampleComponent", "AddValues"]; // Sample array of data, you can replace it with your actual data

return (
    <div className="card-container">
      {cards.map((item, index) => {
        const Component = components[item]; // Get the component reference from the mapping
        return (
          <div className="card" key={index} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
            <Component />
          </div>
        );
      })}
    </div>
  );
};

export default DynamicColorCL;