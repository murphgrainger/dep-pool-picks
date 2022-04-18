import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Navbar from '../components/navbar';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function CreateTournament() {
    const navigate = useNavigate();

    const[isLoading, setLoading] = useState(false);
    const[formValues, setValues] = useState({
        name: '',
        sport: '',
        year: ''
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
            console.log(formValues);
            const res = await fetch('/api/v1/tournaments', {
                method: 'POST',
                headers: {
                "content-type": "application/json"
            },
                body:JSON.stringify(formValues),
        });
            if(!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            console.log(data.tournamentId);
            navigate(`/tournament/${data.tournamentId}`);

        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <>
        <Navbar/>
        <Container maxWidth="lg">
            <h1>Create a New Tournament</h1>
            <form onSubmit={submitPool}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField 
                        id="tournament-name" 
                        name="name"
                        value={formValues.name}
                        label="Tournament Name" 
                        variant="outlined" 
                        fullWidth 
                        required
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField 
                        id="year" 
                        name="year"
                        value={formValues.year}
                        label="Year" 
                        variant="outlined" 
                        fullWidth 
                        required
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                        <Select 
                            id="sport" 
                            name="sport"
                            value={formValues.sport}
                            label="Sport" 
                            variant="outlined" 
                            fullWidth 
                            required
                            onChange={handleInputChange}
                            >
                        <MenuItem value={'Golf'}>Golf</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" type="submit" disabled={isLoading}>Add Tournament</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    </>
    )
}