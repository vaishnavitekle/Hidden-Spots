import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddSpot from './pages/AddSpot';
import AddReview from './pages/AddReview';
export default function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#ddd' }}>
        <div>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/add">Add Spot</Link>
          <span> | </span>
          <Link to="/review">Add Review</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSpot />} />
        <Route path="/review" element={<AddReview />} />
      </Routes>
    </Router>
  );
}
