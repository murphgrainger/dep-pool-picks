import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Navbar from '../components/navbar';

import Button from '@mui/material/Button';


export default function Tournament() {
    const { tournamentId } = useParams();
    const[tournament, setTournament] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/v1/tournaments/${tournamentId}`, {
                    headers: { 'content-type': 'application/json'}
                })
                const tournament = await response.json();
                console.log(tournament)
                setTournament(tournament);
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
             <h1>{tournament.year} {tournament.name}</h1>
             <p>{tournament.sport}</p>
            </div>
         <Button variant="outlined" href="/">Back to Home</Button>
        </div>
        </>
        
    )
}