import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Token from './components/Token';


function App() {
  return (
    <div className='font-sans'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/token' element={<Token/>} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
