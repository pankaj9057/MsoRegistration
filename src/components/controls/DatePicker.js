import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import TextField from '@mui/material/TextField'; 
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl'; 
import Grid from '@mui/material/Grid'; 

export default function DatePickers(props) {

    const { name, label, value, onChange,error=null,helperText,draweOpenStatus } = props 
    return (
        <Grid item xs={12} sm={6} md={6} lg={4} sx={{
            '& .MuiTextField-root': { m: 1, width: draweOpenStatus?'28ch':'35ch' }           
        }}>
        <FormControl  {...(error && {error:true})} >
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DatePicker
                    size="small"
                    label={label}
                    value={value}
                    onChange={onChange}
                    name={name} 
                    inputFormat='dd/MM/yyyy'
                    renderInput={(params) =>
                        <TextField
                            onChange={onChange}
                            {...params} sx={{ mb: 4}}
                            size="small"
                            name={name} 
                        />}
                />
            </LocalizationProvider>
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    </Grid>
    )
}
