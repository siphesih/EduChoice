import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../landing/HomePage';
// Removed Signup and Login routes as you requested

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* No Signup or Login routes */}
    </Routes>
  );
};

export default AppRoutes;
