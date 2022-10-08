import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import Inicio from './views/Inicio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import React from 'react'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
