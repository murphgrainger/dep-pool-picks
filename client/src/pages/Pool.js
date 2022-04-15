import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Navbar from '../components/navbar';
import CardHorizontal from '../components/card-horizontal';

import Button from '@mui/material/Button';


export default function Pool() {
    const { poolId } = useParams();
    const[pool, setPool] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(poolId)
                const response = await fetch(`/api/v1/pools/${poolId}`, {
                    headers: { 'content-type': 'application/json'}
                })
                const pool = await response.json();
                setPool(pool);
                console.log(pool)
            } catch(error) {
                console.log(error);
            }

        }
        fetchData()
    },[])

    return (
        <>
        <Navbar/>
        <h1>Here is the individual Pools page!</h1>
        <CardHorizontal content={pool}></CardHorizontal>
        <Button variant="outlined" href="/pools">View Pools</Button>

        </>
        
    )
}