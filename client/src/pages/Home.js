import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/navbar';
import Container from '@mui/material/Container';

import CardHorizontal from '../components/card-horizontal';

export default function Home() {
    const navigate = useNavigate();
    const[tournaments, setTournaments] = useState([]);
    const[pools, setPools] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/v1/tournaments', {
                    headers: { 'content-type': 'application/json'}
                })
                if(!response.ok) throw new Error(response.statusText)
                const tournaments = await response.json();
                setTournaments(tournaments)

                const poolRes = await fetch('/api/v1/pools', {
                    headers: { 'content-type': 'application/json'}
                })
                if(!response.ok) throw new Error(response.statusText)
                const pools = await poolRes.json();
                setPools(pools)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <>
         <Navbar/>
         <Container className="container">
            <div className="app-header">
                <h1>Welcome to the Pool Picks!</h1>
                <p>Excuse our appearance! This app is just getting started.</p>
            </div>
            <div className="column-wrapper">
                <div className="column">
                    <div className="card-hero">
                        <h3>Pools</h3>
                        {pools && pools.map((p,i) => <CardHorizontal key={i} content={p} link={`/pools/${p.id}`}/>)}

                        <div className="action">
                            <button onClick={() => navigate('/pools')}>See All Pools</button>
                            <button onClick={() => navigate('/create-pool')}>Create Pool</button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-hero --tertiary">
                        <h3>Tournaments</h3>
                        {tournaments && tournaments.map((t,i) => <CardHorizontal key={i} content={t} link={`/tournaments/${t.id}`}/>)}

                        <div className="action">
                            <button disabled>View Tournaments</button>
                            <button onClick={() => navigate('/create-tournament')}>Create Tournament</button>
                        </div>
                    </div>
                </div>
            </div>
         </Container>
        </>
    )
}