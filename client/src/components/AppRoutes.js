import { Route, Routes } from 'react-router-dom';
import CardLayout from './CardLayout';
import ImageDisplayScreen from '../screens/ImageDisplayScreen';
import About from './About';
import DatePickerComponent from './DatePickerComponent';
import Login from '../screens/Login';
import Register from '../screens/Register';
import RequiredAuth from '../routes/RequiredAuth';



const AppRoutes = () => {
  return (
    <Routes>
       <Route exact path="/" element={<CardLayout />} />
       <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      {/* Define your routes */}
      <Route element={<RequiredAuth />}>     
        <Route exact path="/ids" element={<ImageDisplayScreen />} />
        <Route exact path='/abc' element={<About/>}/>
        <Route exact path='/dp' element={<DatePickerComponent/>}/>
      </Route>     
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
