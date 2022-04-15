import React from 'react';

import Navbar from '../components/navbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardHorizontal from '../components/card-horizontal';

export default function Home() {

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

    return (
        <>
         <Navbar/>
         <Container maxWidth="lg">
            <h1>Welcome to the Pool Picks!</h1>
            <p>From here you can create pools, add players, and see track winners as tournaments progress!</p>

            <Button variant="contained" href="/create-pool">Create Pool</Button>
            <Button variant="outlined" href="/pools">View Pools</Button>

            <div>
                <h2>Existing Pools</h2>
                { pools.map(pool => <CardHorizontal content={pool}/>) }
            </div>

         </Container>
        </>
    )
}