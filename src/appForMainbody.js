import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Apps from './perfectByMe.js'
import MainBody from './mainBody.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainBody />} > </Route>
          <Route path='/MainBody' element={<MainBody />} > </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;