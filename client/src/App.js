import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css';

import Home from './pages/Home';
import Pools from './pages/Pools';
import Pool from './pages/Pool';
import CreatePool from './pages/CreatePool';

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/create-pool" element={<CreatePool/>}/>
          <Route path="/pools" element={<Pools/>}/>
          <Route path="/pools/:poolId" element={<Pool/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
  );
}