// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Body from './Body';
import Room from './Room';
import DetailRoom from './DetailRoom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/bootstrap.min.css';
import './css/animate.css';

const App = () => {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} /> {/* Temporary Home component */}
            <Route path="/about" element={<About />} />
            <Route path="/room" element={<Room />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detailroom" element={<DetailRoom />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
