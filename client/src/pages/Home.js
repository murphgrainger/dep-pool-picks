import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/navbar';
import Container from '@mui/material/Container';

import CardHorizontal from '../components/card-horizontal';

export default function Home() {
    const navigate = useNavigate();
    const[tournaments, setTournaments] = useState([]);

    const pools = [
        {
            id: 1,
            name: 'Grainger Masters 2022',
            tournament: 'Masters'
        },{
            id: 2,
            name: 'Peters PGA 2022',
            tournament: 'PGA Tournament'
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/v1/tournaments', {
                    headers: { 'content-type': 'application/json'}
                })
                if(!response.ok) throw new Error(response.statusText)
                const tournaments = await response.json();
                console.log(tournaments)
                setTournaments(tournaments)
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
                        <p>Click to see all the pools.</p>
                        <div className="action">
                            <button onClick={() => navigate('/pools')}>See All Pools</button>
                            <button onClick={() => navigate('/create-pool')}>Create Pool</button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-hero --tertiary">
                        <h3>Tournaments</h3>
                        <p>There are no tournaments at this time.</p>
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