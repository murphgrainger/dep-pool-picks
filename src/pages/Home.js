import React from 'react';

import Navbar from '../components/navbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <>
         <Navbar/>
         <Container maxWidth="lg">
            <h1>Welcome to the Pool Picks!</h1>
            <p>From here you can create pools, add players, and see track winners as tournaments progress!</p>

         <Button variant="contained" href="/create-pool">Create Pool</Button>
         </Container>
        </>
    )
}