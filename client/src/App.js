import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css';

import Home from './pages/Home';
import Pools from './pages/Pools';
import Pool from './pages/Pool';
import Tournament from './pages/Tournament';
import CreatePool from './pages/CreatePool';
import CreateTournament from './pages/CreateTournament';

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/create-tournament" element={<CreateTournament/>}/>
          <Route path="/create-pool" element={<CreatePool/>}/>
          <Route path="/pools" element={<Pools/>}/>
          <Route path="/pools/:poolId" element={<Pool/>}/>
          <Route path="/tournaments/:tournamentId" element={<Tournament/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
  );
}