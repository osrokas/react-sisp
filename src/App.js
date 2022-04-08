// import './App.css';
// import Map from './pages/map';
// import Header from './pages/Header';


// function App() {
//   return (
//     <div className="App">
//       < Header />
//       < Map />
//     </div>
//   );
// }


// export default App;



import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components';
import MapTraffic from './components/MapTraffic';
import MapParking from './components/MapParking';
import MapBar from './components/MapBar';
import MapTest from './components/Maps/MapCore'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>
        <Route path='/traffic' element={<MapTraffic />} exact={true} />
        <Route path='/parking' element={<MapParking/>} exact={true}/>
        <Route path='/test' element={<MapBar/>} exact={true}/>
        <Route path='/newmap' element={<MapTest/>} exact={true}/>
      </Routes>
    </Router>
  );
}
  
export default App;