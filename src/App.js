import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Faq from './components/faq';
import ContactUs from './components/contactUs';
import Treks from './components/Treks';
import Knowus from './components/Knowus';
import Tripplanner from './components/tripPlanner';
import LandmarkTeaser from './components/LandmarkTeaser';
import HomeGallery from './components/HomeGallery';
import Landing from './components/landing';

function App() {
  return (
    <Router basename="/melong">

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/knowus" element={<Knowus />} />
        <Route path="/tripplanner" element={<Tripplanner />} />
        <Route path="/landmarkteaser" element={<LandmarkTeaser />} />
        <Route path="/homegallery" element={<HomeGallery />} />

      </Routes>

    </Router>
  );
}

export default App;
