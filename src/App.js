import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import Inicio from './views/Inicio';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
