import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import Navbar from '../components/navbar';
import CardHorizontal from '../components/card-horizontal';

import Button from '@mui/material/Button';


export default function Pool() {
    const navigate = useNavigate();

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
        <div className="container">
            <div className="app-header">
             <h1>{pool.name}</h1>
             <button onClick={() => navigate('/pools')}>Add Pool Member</button>         
            </div>
            <div className="action">
                <button onClick={() => navigate('/pools')}>Back to Pools</button>         
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        </div>
        </>
        
    )
}