import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import CreatePool from './pages/CreatePool';

export default function App() {
  return (
      <div>
        <Routes>
          <Route path="/create-pool" element={<CreatePool/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
  );
}