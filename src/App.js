// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './router/AppRoutes'; // Import the Routes file
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes /> {/* Use the Routes component */}
    </Router>
  );
};

export default App;

