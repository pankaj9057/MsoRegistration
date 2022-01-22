import Alert from '@mui/material/Alert';
import React from 'react'
import Typography from '@mui/material/Typography';
export default function MteInfo() {
    return (
        <Alert variant="outlined" severity="info" sx={{ m: 1 }}>
        <Typography variant="body2">If you’re registering with Nationwide, your details must match with your MTE registration. If these details are different, you will be unable to login to NFI Online.</Typography>
        <Typography variant="body2">Please check and confirm before proceeding.</Typography>
    </Alert>
    )
}