import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Navbar from '../components/navbar';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function CreatePool() {
    const navigate = useNavigate();

    const[isLoading, setLoading] = useState(false);
    const[formValues, setValues] = useState({
        name: '',
        tournament: ''
    })

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues((values) => ({
            ...values,
            [name]:value
        }));
    }

    const submitPool = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch('/api/v1/pools', {
                method: 'POST',
                headers: {
                "content-type": "application/json"
            },
                body:JSON.stringify(formValues),
        });
            if(!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            console.log(data.poolId);
            navigate(`/pools/${data.poolId}`);

        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <>
        <Navbar/>
        <Container maxWidth="lg">
            <h1>Create a New Pool</h1>
            <form onSubmit={submitPool}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField 
                        id="pool-name" 
                        name="name"
                        value={formValues.name}
                        label="Pool Name" 
                        variant="outlined" 
                        fullWidth 
                        required
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField 
                        id="tournament" 
                        name="tournament"
                        value={formValues.tournament}
                        label="Tournament" 
                        variant="outlined" 
                        fullWidth 
                        required
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" type="submit" disabled={isLoading}>Create Pool</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    </>
    )
}