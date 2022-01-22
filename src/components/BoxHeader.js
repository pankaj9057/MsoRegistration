import React from 'react';
import { Grid,  Typography } from '@mui/material';

export default function BoxHeader(props) {
    const { title } = props;
    return (       
        <Grid columns={12} container sx={{
            mx: 'auto',
            bgcolor: 'primary.light',
            color: '#fff',
            m: 1,
            borderRadius: 1,
        }}>
            <Typography sx={{ m: 1 }}>{title}</Typography>
        </Grid>
    )
}
