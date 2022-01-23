import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText,Grid } from '@mui/material';
export default function Select(props) { 
    const { name, label, value, error = null, onChange, options, helperText,draweOpenStatus } = props;
    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl sx={{ m: 1, minWidth: draweOpenStatus?'28ch':'35ch'  }}
                {...(error && { error: true })}>
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    label={label}
                    name={name}
                    value={value}
                    size="small"
                    onChange={onChange}>
                    <MenuItem value="">Please Select</MenuItem>
                    {
                        options.map(
                            item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                        )
                    }
                </MuiSelect>
                {error && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </Grid>
    )
}
