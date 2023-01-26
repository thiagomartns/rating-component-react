import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import Home from './Pages/home/Home'
import Thanks from './Pages/thanks/Thanks'
import './App.scss'

function App() {

  const [rating, setRating] = useState('')
  
  return (
    <div className="App">
      <div className="appContainer">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home rating={rating} setRating={setRating} />} />
            <Route path='thanks' element={<Thanks rating={rating} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
