import Button from '@mui/material/Button' 
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl'; 
const simpleform = () => {
    const [state, setState] = useState({
        errorMessage: {
            
            firstName: '',            
            Surname: '',
            date: '',
            Title:'',
            Role:'',
            Brand:''
        },        
        error: false,
        activeStep: 0,         
        firstName: '', 
        Surname: '',
        date: null,
        Title:'',
        Role:'',
        Brand:''
    })  
    const handleChange = (event) => {
     
      setState(prev => ({
            ...state,
            ...prev,
            [event.target.name]: event.target.value,
        }))
        handleNext(event);
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const handleNext = (event) => {
        debugger;
        Object.entries(state).map(([key, value]) => (
          (( ( key === event.target.name &&
              event.target.value !== null &&
                event.target.value !== '' )  ? false:true                        
            )
            && 
            (
            value === '' || value === null ))
            ? setState(prev => ({
                ...prev,
                error: true,
                errorMessage: {
                    ...prev.errorMessage,
                    [key]: "enter correct " + key + ""
                }
            })) : setState(prev => ({
                ...prev,
                error: false,
                errorMessage: {
                    ...prev.errorMessage,
                    [key]: ""
                }
            }))
        ))
    };

    return (
        <div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                <Alert variant="outlined" severity="info"  sx={{ m: 1}}>
                    <Typography variant="body2">
                        If you’re registering with Nationwide, your details must match with your MTE registration. If these details are different, you will be unable to login to NFI Online.
                    </Typography>
                    <Typography variant="body2">
                        Please check and confirm before proceeding.
                    </Typography>
                </Alert>
                </Box>
                <Box  sx={{ flexDirection: 'row' }}>
                    <Typography variant="h5"  sx={{ m: 1}}>
                        Personal Details
                    </Typography>
                    <Box>
                        <FormControl sx={{ m: 1, minWidth: 222 }} error={state.errorMessage.Title !== ''} >
                            <InputLabel id="demo-simple-select-helper-label">Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={state.Title}
                                name="Title"
                                label="Title"                                
                                onChange={event=>handleChange(event)}
                                size="small"
                                autoWidth = {true}                                
                            >
                                <MenuItem value="">
                                    <em>Select...</em>
                                </MenuItem>
                                <MenuItem value="Miss">Miss</MenuItem>
                                <MenuItem value="Mr">Mr</MenuItem>
                                <MenuItem value="Mrs">Mrs</MenuItem>
                                <MenuItem value="Ms">Ms</MenuItem>
                                <MenuItem value="Dr">Dr</MenuItem>
                                <MenuItem value="Sir">Sir</MenuItem>
                            </Select>
                            <FormHelperText>{state.errorMessage.Title}</FormHelperText>
                        </FormControl>
                        <TextField
                            label="First Name"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={state.firstName}
                            error={state.errorMessage.firstName !== ''}
                            helperText={state.errorMessage.firstName}
                            size="small"
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Surname"
                            onChange={handleChange}
                            type="text"
                            name="Surname"
                            value={state.Surname}
                            error={state.errorMessage.Surname !== ''}
                            helperText={state.errorMessage.Surname}
                            size="small"
                        />
                        <FormControl error={state.errorMessage.date !== ''} >
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DatePicker
                             size="small"
                                label="Date of birth"
                                value={state.date}
                                onChange={handleDateChange}
                                name="date"
                                error = {state.errorMessage.date !== ''}
                                renderInput={(params) =>
                                    <TextField
                                        onChange={handleChange}
                                        error = {state.errorMessage.date !== ''}
                                        {...params} sx={{ mb: 4 }}
                                        size="small"
                                        name="date"
                                    />}
                            />
                        </LocalizationProvider>
                        <FormHelperText>{state.errorMessage.date}</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl sx={{ m: 1, minWidth: 222 }} error={state.errorMessage.Role !== ''}>
                            <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={state.Role}
                                label="Role"
                                onChange={handleChange}
                                size="small"
                                name="Role">
                                <MenuItem value="">
                                    <em>Select...</em>
                                </MenuItem>
                                <MenuItem value="S">Intermediary</MenuItem>
                                <MenuItem value="A">Administrator</MenuItem>
                                <MenuItem value="SU">Supervisor</MenuItem>
                            </Select>
                            <FormHelperText>{state.errorMessage.Role}</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl sx={{ m: 1, minWidth: 460 }} error={state.errorMessage.Brand !== ''}>
                            <InputLabel id="demo-simple-select-helper-label">Which brand(s) are you registering for?</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={state.Brand}
                                label="Which brand(s) are you registering for?"
                                onChange={handleChange}
                                size="small"
                                name="Brand">
                                <MenuItem value="">
                                    <em>Select...</em>
                                </MenuItem>
                                <MenuItem value="NBS">Nationwide</MenuItem>
                                <MenuItem value="TMW">The Mortgage Works</MenuItem>
                                <MenuItem value="BOTH">Both</MenuItem>
                            </Select>
                            <FormHelperText>{state.errorMessage.Brand}</FormHelperText>
                        </FormControl>

                    </Box>
                    <Box>
                    <Alert variant="outlined" severity="info" sx={{ m: 1, minWidth: 460 }}>
                    If you’re already registered with Nationwide or The Mortgage Works and would like to register for a second brand, select ‘Both’.
                    </Alert>
                    </Box>
                    <Box>
                    <Button  sx={{ m: 1}} variant="contained" onClick={handleNext}>Agree & Continue</Button>
                    </Box>
                </Box>
                                
            </Box>
        </div>
    )
}
export default simpleform
