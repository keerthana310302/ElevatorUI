import './App.css';
import OuterCar from './Components/Outer-Car/OuterCar';
import Shaft from './Components/Shaft/Shaft';
import Transactions from './Components/Transaction/Transactions';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Nav from './NavBar/Nav';
import Dispatcher from './Components/Dispatcher/Dispatcher';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
        {/* <h1>Elevator</h1> */}
        <Dispatcher/>
        <DataProvider>
          {/* <Nav/> */}
          <Routes>
              <Route path='/' element= {<OuterCar  />}/>
              <Route path='/movement' element= {<Shaft/>} />
              <Route path='/transactions' element={<Transactions/>}/>
          </Routes>
          {/* <div className='App-container'>
            <OuterCar/>
            <Shaft/>
          </div>
          */}


          
        </DataProvider>
    </div>
  );
}

export default App;
