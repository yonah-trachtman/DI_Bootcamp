import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Weather from './Componants/Weather';
import Favorites from './Componants/Favorates';
import ErrorBoundary from './Componants/ErrorBoundary'; 


function App() {
    return (
      <div className="App">
            <nav>
                <Link to="/">Weather</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
            <Routes>
                <Route path="/" element={
                 <ErrorBoundary fallback={<p>An error has occurred in Home</p>}>
                 <Weather />
                 </ErrorBoundary>
                } />
                <Route path="/favorites" element={
                  <ErrorBoundary fallback={<p>An error has occurred in Home</p>}>
                  <Favorites />
                  </ErrorBoundary>
                          } />
            </Routes>
       </div>
    );
}

export default App;
