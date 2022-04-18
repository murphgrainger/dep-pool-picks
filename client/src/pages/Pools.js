import React, { useEffect, useState } from 'react';

import Navbar from '../components/navbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export default function Pools() {

    const[pools, setPools] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('/api/v1/pools', {
                    headers: { 'content-type': 'application/json' },
                })
                const pools = await response.json();

                setPools(pools.pools);

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
                <h1>Pool List</h1>
                <p>Excuse our appearance! This app is just getting started.</p>
            </div>
             { pools && pools.map((pool, i) => { 
                 return (
                    <div key={i} className="card-horizontal">
                     <p>{pool.name}</p>
                     <Button variant="outlined" href={`/pools/${pool.id}`}>View Pool</Button>
                    </div>
                    )
                 }
             )}
            </Container>     
   
        </>

    )
}