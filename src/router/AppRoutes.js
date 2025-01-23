import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../landing/HomePage';
import HomeLoggedIn from "../afterLogIn/HomeLoggedIn";
// Removed Signup and Login routes as you requested

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* No Signup or Login routes */}
      <Route path="/homeloggedin" element={<HomeLoggedIn />} />
    </Routes>
  );
};

export default AppRoutes;
