import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Overview from './pages/Overview';
import Ticket from './pages/Ticket';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/ticket" element={<Ticket/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
