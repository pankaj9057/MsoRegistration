import Alert from '@mui/material/Alert';
import React from 'react'
import Typography from '@mui/material/Typography';
export default function DeclarationInfo() {
    return (
        <Alert variant="outlined" severity="info" sx={{ m: 1 }}>
        <Typography variant="body2">By clicking ‘Agree & Continue’, you confirm you have read and agree to the registration declaration.</Typography>
        </Alert>
    )
}