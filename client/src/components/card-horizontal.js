import React from 'react';
import Button from '@mui/material/Button';

export default function CardHorizontal(props) {
    console.log(props);
    return (
        <div className="card-horizontal">
        <h4>{props.content.name}</h4>
        <Button variant="outlined" href="/view-pool/:id">View Pool</Button>
        </div>
    )
}