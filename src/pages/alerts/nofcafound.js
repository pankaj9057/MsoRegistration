import Alert from '@mui/material/Alert';
import React from 'react'
import Typography from '@mui/material/Typography';
export default function NoFcaFound() {
    return (
        <Alert variant="outlined" severity="warning"   sx={{ m: 1 }}>
            <Typography  variant="body2">We have been unable to find a company on the FCA register matching the FCA number entered.</Typography>
            <Typography  variant="body2">The information we hold is updated each Monday, with changes made with the FCA up to the previous Thursday.</Typography>
            <Typography variant="body2">If you believe the details you have entered are correct and you’re registering in line with the above timescales, please contact the FCA.</Typography>
        </Alert>
    )
}