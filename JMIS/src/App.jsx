// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Journals from './Journals'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/journal" element={<Layout />}>
          <Route index element={<Journals />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;