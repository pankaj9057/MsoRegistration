import Alert from '@mui/material/Alert';
import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
export default function PopulateInfo(props) {
    const { titles=[], outlined = true, severity="info" } = props;
    return (
        <Grid columns={12} container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Alert variant="outlined" severity={severity} sx={{ m: 1, border: outlined ? 'auto' : 'none', padding: outlined ? 'auto' : 0 }}>
                    {
                        titles.map(
                            item => (<Typography key={item.id} variant="body2">{item.title}</Typography>)
                        )
                    }
                </Alert>
            </Grid>
        </Grid>
    )
}