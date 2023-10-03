import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import './App.css';
import Header from './Header/Header';
import MainContent from './Hero/MainContent';
import Footer from './Footer/Footer';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Events from './Pages/Events';
import Products from './Pages/Products';
import Support from './Pages/Support';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
