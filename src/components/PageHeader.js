import React from 'react';
import { Grid,  Typography } from '@mui/material';

export default function PageHeader(props) {
    const { title } = props;
    return (       
            <Grid columns={12} container>
                <Typography sx={{ m: 1 }} variant="h5">{title}</Typography>
            </Grid>  
    )
}
