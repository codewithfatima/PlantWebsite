import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Header from './Components/Header';
import Services from './Components/Services';
import Popular from './Components/Popular';
import Review from './Components/Review';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
    <div>
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/header" element={<Header />} />
          <Route path="/services" element={<Services />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
