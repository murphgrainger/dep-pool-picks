import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

export default function CardHorizontal(props) {
    const navigate = useNavigate();
    return (
        <div className="card-horizontal">
         <h4>{props.content.name}</h4>
         <Button variant="outlined" onClick={() => navigate(props.link)}>View</Button>
        </div>
    )
}