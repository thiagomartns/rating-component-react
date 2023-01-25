import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home'
import Thanks from './Pages/thanks/Thanks'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='thanks' element={<Thanks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
