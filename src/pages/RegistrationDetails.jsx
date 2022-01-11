import Box from '@mui/material/Box';
import React from 'react'
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
import { useMediaQuery } from 'react-responsive';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';  
import NoFcaFound from './alerts/nofcafound'
import MteInfo from './alerts/MteInfo';
import DeclarationInfo from "./alerts/DeclarationInfo"
import { MsoRegistrationService } from '../Services/msoregistration-api'; 
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate  } from 'react-router-dom';
import {CompanyNameRoute} from '../Scripts/RoutesData';
function  RegistrationDetails({NavigateToNext}) { 
 
    debugger;
    const state = NavigateToNext.FormState;
    const setState = NavigateToNext.setFormDataState;
    const handleChange = (event) => {

        setState(prev => ({
            ...state,
            ...prev,
            [event.target.name]: event.target.value,
            errorMessage: {
                ...prev.errorMessage,
                [event.target.name]: ""
            }
        })) 
   }
const handleme= () =>{
    NavigateToNext.NavigateToNext(CompanyNameRoute.RouteNumber)
    navigate(CompanyNameRoute.RouteName); 
}

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const handleChangeEvent= (event)=>{
        Object.entries(state).map(([key, value]) => (
            (((key === event.target.name &&
                event.target.value !== null &&
                event.target.value !== '') ? false : true
            )
                &&
                (
                    value === '' || value === null))
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
    }

    const [fcaStatus, setFcaStatus] = React.useState(true);
    const [continuebuttondisabled, setContinueButtonStatus] = React.useState(true);
    const [fcabuttonloading, setFcabuttonloading] = React.useState(false);
    const [continuebuttonloading, Setcontinuebutton] = React.useState(false);
    
 
    const findFCA = (event) =>
    {
       
        setFcabuttonloading(true);
        console.log(state.CompanyFCAnumber);
        MsoRegistrationService.post(state.CompanyFCAnumber,"/validatefca")
        .then((response) => {
            if(response.ok)
            {
            setFcaStatus(true);
            setContinueButtonStatus(false);
            console.log("Enable and redirect to, next menu");
            setFcabuttonloading(false);
            }
            else{
                setFcaStatus(false);
                setContinueButtonStatus(true);
                setFcabuttonloading(false);
            }
        })
        .catch((err) => {
            console.error(err);
            setFcaStatus(false);
            setFcabuttonloading(false);
        });
    }
    const navigate = useNavigate();
    const handleNext = (event) => {         
        handleChangeEvent(event);        
        if(!state.error)
        {
            Setcontinuebutton(true);
            MsoRegistrationService.post(
                 {
                    "title": {
                      "value": state.Title,
                      "caption": state.TitleCaption
                    },
                    "firstname": state.firstName,
                    "surname": state.Surname,
                    "dateOfBirth": state.date,
                    "role": {
                      "value": state.Role,
                      "caption": state.RoleCaption
                    },
                    "brand": {
                      "value": state.Brand,
                      "caption": state.BrandCaption
                    },
                    "fcaNumber": state.CompanyFCAnumber
                },"/register"
            )
            .then((response) => {
                if(response.ok)
                {
                    console.log("Enable and redirect to, next menu");
                    NavigateToNext.NavigateToNext(CompanyNameRoute.RouteNumber)
                    navigate(CompanyNameRoute.RouteName); 
                }
                Setcontinuebutton(false);
            })
            .catch((err) => {
                console.error(err);
                Setcontinuebutton(false);
            });
        }
    };

    return (

        <div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: isMobile ? '28ch' : '35ch' },
                    display: 'flex-box'
                }}
                noValidate
                autoComplete="off"
            > 
                <Grid container
                    spacing={1}
                    columns={12}>
                    <Grid columns={12} container>
                        <Typography sx={{ m: 1 }} variant="h5">Registration Details </Typography>
                    </Grid>
                    <Grid container columns={12} display={fcaStatus?'none':'block'}>
                        <NoFcaFound/>
                    </Grid>
                    <Grid container columns={12} display={'block'}> 
                      <MteInfo/>
                    </Grid>
                    <Grid columns={12} container>

                        <Grid columns={12} container sx={{
                            mx: 'auto',
                            bgcolor: 'primary.light',
                            color: '#fff',
                            m: 1,
                            borderRadius: 1,
                        }}>
                            <Typography sx={{ m: 1 }}>Personal Details</Typography>
                        </Grid>
                        <Grid columns={12} container>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <FormControl sx={{ m: 1, minWidth: isMobile ? '28ch' : '35ch' }} error={state.errorMessage.Title !== ''}>
                                    <InputLabel id="demo-simple-select-helper-label">Title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={state.Title}
                                        label="Title"
                                        onChange={handleChange}
                                        size="small"
                                        name="Title">
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
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
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
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
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
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <FormControl error={state.errorMessage.date !== ''} >
                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                        <DatePicker
                                            size="small"
                                            label="Date of birth"
                                            value={state.date}
                                            onChange={handleDateChange}
                                            name="date"
                                            error={state.errorMessage.date !== ''}
                                            renderInput={(params) =>
                                                <TextField
                                                    onChange={handleChange}
                                                    error={state.errorMessage.date !== ''}
                                                    {...params} sx={{ mb: 4 }}
                                                    size="small"
                                                    name="date"
                                                />}
                                        />
                                    </LocalizationProvider>
                                    <FormHelperText>{state.errorMessage.date}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <FormControl sx={{ m: 1, minWidth: isMobile ? '28ch' : '35ch' }} error={state.errorMessage.Role !== ''}>
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
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <FormControl sx={{ m: 1, minWidth: isMobile ? '28ch' : '35ch' }} error={state.errorMessage.Brand !== ''}>
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

                            </Grid>
                        </Grid>
                        <Grid columns={12} container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Alert variant="outlined" severity="info" sx={{ border: 'none', padding: 0, margin: 1 }}>
                                    If you’re already registered with Nationwide or The Mortgage Works and would like to register for a second brand, select ‘Both’.
                                </Alert>
                            </Grid>
                        </Grid>
                        <Grid columns={12} container sx={{
                            mx: 'auto',
                            bgcolor: 'primary.light',
                            color: '#fff',
                            m: 1,
                            borderRadius: 1,
                        }}>
                            <Typography sx={{ m: 1 }}>Company Details</Typography>
                        </Grid>
                        <Grid columns={12} container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Alert variant="outlined" severity="info" sx={{ border: 'none', padding: 0, margin: 1 }}>
                                    Please enter your company FCA number and select ‘Search’ to retrieve details from the FCA register.
                                </Alert>
                            </Grid>
                        </Grid>
                        <Grid columns={12} container>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField
                                    label="Company FCA number"
                                    onChange={handleChange}
                                    type="text"
                                    name="CompanyFCAnumber"
                                    value={state.CompanyFCAnumber}
                                    error={state.errorMessage.CompanyFCAnumber !== ''}
                                    helperText={state.errorMessage.CompanyFCAnumber}
                                    size="small"
                                >
                                </TextField>

                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={8}>
                                <LoadingButton startIcon={<SearchIcon />} sx={{ m: 1 }} variant="contained" 
                                loading={fcabuttonloading} 
                                loadingPosition="start"
                                disabled={state.CompanyFCAnumber === ''}
                                color="success" size="medium" onClick={findFCA}>Search</LoadingButton>
                            </Grid>
                        </Grid>
                        <Grid columns={12} container sx={{
                            mx: 'auto',
                            bgcolor: 'primary.light',
                            color: '#fff',
                            m: 1,
                            borderRadius: 1,
                        }}>
                            <Typography sx={{ m: 1 }}>Declaration</Typography>
                        </Grid>
                        <Grid columns={12} container display={'block'}>
                           <DeclarationInfo/>
                        </Grid>
                        <Grid columns={12} container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <LoadingButton startIcon={<SendIcon />} sx={{ m: 1 }} variant="contained"
                                 disabled ={continuebuttondisabled} 
                                 loading={continuebuttonloading} 
                                loadingPosition="start" 
                                color="success" onClick={handleNext}>Agree & Continue</LoadingButton> 
                                <LoadingButton onClick={handleme}>Test Next Button</LoadingButton>                                 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}
export default RegistrationDetails
