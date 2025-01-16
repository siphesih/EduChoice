import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../landing/HomePage';
import Signup from '../Sign/Signiup';
import Login from '../Sign/Signin';

//import AddSchool from './landing/AddSchool';
//import ManageSchools from './landing/ManageSchools';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/login" element={<Login />} /> *
      
      
      {/*<Route path="/admin/add-school" element={<AddSchool />} />*/}
       {/*<Route path="/admin/schools" element={<ManageSchools />} />*/}
    </Routes>
  );
};

export default AppRoutes;
