// src/App.js
import React from 'react';
import Header from './page/Header';
import Footer from './page/Footer';
import Kontak from './page/Kontak';
import Tentang from './page/Tentang';
import Body from './page/Body';
import Room from './page/Room';
import Login from './page/Login';
import Daftar from './page/Daftar';
import DetailRoom from './page/DetailRoom';
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
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/ruang" element={<Room />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/detail-kamar" element={<DetailRoom />} />
            <Route path="/masuk" element={<Login />} />
            <Route path="/daftar" element={<Daftar />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
