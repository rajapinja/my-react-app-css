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

function CardLayout () { 
    return (
      <div className="card-container">
        <div className="card"> 
          <HelloWorld/>
        </div>
        <div className="card">
            <CounterScreen/>
        </div>
        <div className="card"> 
          <FormScreen/>
        </div>
        <div className="card">
            <NumberList/>
        </div>
        <div className="card">
            <SimpleList/>
        </div>
        <div className="card">
            <ComponentWithSpread/>
        </div>
        <div className="card"> 
          <ExampleComponent/>
        </div>
        <div className="card">
            <AddValues/>
        </div>
       
      </div>
    );
  }


export default CardLayout;
