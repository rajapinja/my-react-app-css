import { Routes, Route, Router } from 'react-router-dom';
import Home from '../screens/Home';
import Layout from '../_navbar/Layout';
import HelloWorld from '../screens/HelloWorld';
import AddValues from '../screens/AddValues';
import ComponentWithSpread from '../screens/ComponentWithSpread';
import CounterScreen from '../screens/CounterScreen';
import FetchStatesDBScreen from '../screens/FetchStatesDBScreen';
import Login from '../screens/Login';
import NumberList from '../screens/NumberList';
import SimpleList from '../screens/SimpleList';
import Register from '../screens/Register';
import FormScreen from '../screens/FormScreen';
import StateDistrictPickerScreen from '../screens/StateDistrictPickerScreen';
import StateDistrictScreen from '../screens/StateDistrictScreen';
import ImageDisplayScreen from '../screens/ImageDisplayScreen';
import Error from '../screens/Error';
import Profile from '../screens/Profile';
import Overview from '../pagination/Overview';
import Heading from '../pagination/heading';
import AdditionalBenefits from '../pagination/AdditionalBenefits';
import BonusTopics from '../pagination/BonusTopics';
import WhyToChoose from '../pagination/WhyToChoose';
import Contact from '../pagination/Contact';
import JOP from '../pagination/Jop';
import PaginationDisplay from '../components/PaginationDisplay';
import Slideshow from '../screens/Slideshow';
import LayeredCards from '../screens/LayeredCards';
import DeckOfCards from '../screens/DeckOfCards';


const App = () => {
  return (   
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />}/>
          <Route path='login' element={<Login />}/>      
          <Route path='profile' element={<Profile />}/>   
          {/* <Route element={<RequiredAuth />}>  */}
            <Route path="SimpleList" element={<SimpleList />} />
            <Route path='FormScreen' element={<FormScreen />}/>  
            <Route path='NumberList' element={<NumberList />}/>
            <Route path='FetchStatesDBScreen' element={<FetchStatesDBScreen />}/>       
            <Route path='CounterScreen' element={<CounterScreen />}/> 
            <Route path='ComponentWithSpread' element={<ComponentWithSpread />}/>            
            <Route path='AddValues' element={<AddValues />}/> 
            <Route path='HelloWorld' element={<HelloWorld />}/>  
            <Route path='StateDistrictPickerScreen' element={<StateDistrictPickerScreen />}/>
            <Route path='StateDistrictScreen' element={<StateDistrictScreen />}/>             
            <Route path='ImageDisplayScreen' element={<ImageDisplayScreen />}/>  
            <Route path="/overview" element={<Overview />} />
            <Route path="/heading" element={<Heading />} />
            <Route path="/abenefits" element={<AdditionalBenefits />} />
            <Route path="/bonusTopics" element={<BonusTopics />} />
            <Route path="/whyToChoose" element={<WhyToChoose />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jop" element={<JOP />} />
            <Route path="/pdisplay" element={<PaginationDisplay />} />
            <Route path="/slideshow" element={<Slideshow />} />
            <Route path="/layercard" element={<LayeredCards />} />
            <Route path="/deckofcards" element={<DeckOfCards />} />

              {/* <Route path="about" element={<About />} /> */}
              {/* </Route>   */}
              <Route path='*' element={<Error />} />
              {/* <Route path="*" element={<p>Not found!</p>} /> */}
            </Route>
          </Routes>
    
  );
};

export default App;