import React from 'react'
import { TextField,Grid } from '@mui/material';

export default function Input(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <TextField
            size="small"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
        </Grid>
    )
}
