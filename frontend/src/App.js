import React from 'react';
//import './App.css';
import NavTop from './NavTop';
import { BrowserRouter as Router } from 'react-router-dom';
import LocalRouter from './LocalRouter';

function App() {
  return (
    <Router basename="/">
      <NavTop />
      <LocalRouter />
    </Router>
  );
}

export default App;
