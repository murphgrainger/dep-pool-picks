import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import Navbar from '../components/navbar';
import CardHorizontal from '../components/card-horizontal';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { set } from 'express/lib/application';

export default function Pool() {
    const navigate = useNavigate();

    const { poolId } = useParams();
    const[pool, setPool] = useState([])
    const[formValues, setValues] = useState({
        name: '',
    })
    const[showAddMember, toggleAddMember] = useState(false);

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

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues((values) => ({
            ...values,
            [name]:value
        }));
    }

    const submitMember = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/v1/members', {
                    headers: {'content-type':'application/json' }, 
                    method: 'POST',
                    body: JSON.stringify({
                        name: formValues.name,
                        poolId: poolId
                })
            })
            if(!res.ok) throw new Error(res.statusText)
            const data = await res.json();
            console.log('data', data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="app-header">
             <h1>{pool.name}</h1>
             { !showAddMember && <button onClick={() => toggleAddMember(true)}>Add Pool Member</button> }      
             { showAddMember && 
             <div>
                <form onSubmit={submitMember}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField 
                            id="pool-name" 
                            name="name"
                            value={formValues.name}
                            label="Member Name" 
                            variant="outlined" 
                            fullWidth 
                            required
                            onChange={handleInputChange}
                            />
                     </Grid>
                     <Grid item xs={12}>
                         <div className="action">
                            <button type='submit'>Add Member</button>
                            <button onClick={() => toggleAddMember(false)}>Cancel</button>
                         </div>
                     </Grid>
                    </Grid>
                </form>
            </div> }  
            </div>

     
            <div className="action">
                <button onClick={() => navigate('/pools')}>Back to Pools</button>         
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        </div>
        </>
        
    )
}