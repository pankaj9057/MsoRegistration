import React from 'react'
import { TextField,Grid } from '@mui/material';

export default function Input(props) {

    const { name, label, value,error=null, draweOpenStatus, onChange, ...other } = props;
    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField
            sx={{ m: 1, width:draweOpenStatus?'28ch':'35ch'}}
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
