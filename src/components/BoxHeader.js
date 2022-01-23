import React from 'react';
import { Grid,  Typography } from '@mui/material';

export default function BoxHeader(props) {
    const { title } = props;
    return (       
        <Grid columns={12} container sx={{
            mx: 'auto',
            bgcolor: 'primary.light',
            color: '#fff',  
            borderTopLeftRadius:5,
            borderTopRightRadius:5
        }}>
            <Typography sx={{ m: 1 }}>{title}</Typography>
        </Grid>
    )
}
