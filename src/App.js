import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Faq from './components/faq';
import ContactUs from './components/contactUs';
import Test from './components/Test';

function App() {
  return (
    <Router basename="/melong">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
