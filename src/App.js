import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Faq from './components/faq';
import ContactUs from './components/contactUs';
import Treks from './components/Treks';
import Knowus from './components/Knowus';
import Tripplanner from './components/tripPlanner';

function App() {
  return (
    <Router basename="/melong">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/knowus" element={<Knowus />} />
          <Route path="/tripplanner" element={<Tripplanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
