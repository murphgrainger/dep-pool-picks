import React, { useEffect, useState } from 'react';

import Navbar from '../components/navbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export default function Tournaments() {

    const[tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('/api/v1/tournaments', {
                    headers: { 'content-type': 'application/json' },
                })
                const tournaments = await response.json();
                setTournaments(tournaments);

            } catch(error) {
                console.log(error)
            }
        }

        fetchData()

    },[])

    return (
        <>
            <Navbar/>   
            <Container>
            <div className="app-header">
                <h1>Tournament List</h1>
                <p>Excuse our appearance! This app is just getting started.</p>
            </div>
             { tournaments && tournaments.map((tournament, i) => { 
                 return (
                    <div key={i} className="card-horizontal">
                     <p>{tournament.name}</p>
                     <Button variant="outlined" href={`/tournaments/${tournament.id}`}>View Tournament</Button>
                    </div>
                    )
                 }
             )}
            </Container>     
   
        </>

    )
}