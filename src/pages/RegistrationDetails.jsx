import Box from '@mui/material/Box';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { MsoRegistrationService, getTitle, getBrands, getRole } from '../Services/msoregistration-api';
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from 'react-router-dom';
import { CompanyNameRoute } from '../Scripts/RoutesData';
import PageHeader from "../components/PageHeader";
import Controls from '../components/controls/Controls';
import BoxHeader from '../components/BoxHeader';
import PopulateInfo from '../components/alerts/PopulateInfo';
function RegistrationDetails({ NavigateToNext }) {

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
    const handleme = () => {
        NavigateToNext.NavigateToNext(CompanyNameRoute.RouteNumber)
        navigate(CompanyNameRoute.RouteName);
    }
    const handleDateChange = (date) => {
        setState({ ...state, date })
    }
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const handleChangeEvent = (event) => {
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


    const findFCA = (event) => {

        setFcabuttonloading(true);
        console.log(state.CompanyFCAnumber);
        MsoRegistrationService.post(state.CompanyFCAnumber, "/validatefca")
            .then((response) => {
                if (response.ok) {
                    setFcaStatus(true);
                    setContinueButtonStatus(false);
                    console.log("Enable and redirect to, next menu");
                    setFcabuttonloading(false);
                }
                else {
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
        if (!state.error) {
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
                }, "/register"
            )
                .then((response) => {
                    if (response.ok) {
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
                    <PageHeader title="Registration Details" />
                    <Grid container columns={12} display={fcaStatus ? 'none' : 'block'}>
                       <PopulateInfo severity="warning"  titles={[
                             {id:1,title:"We have been unable to find a company on the FCA register matching the FCA number entered." },
                             {id:2,title:"The information we hold is updated each Monday, with changes made with the FCA up to the previous Thursday." },
                             {id:3,title:"If you believe the details you have entered are correct and you’re registering in line with the above timescales, please contact the FCA." }
                        ]}/>
                    </Grid>                     
                    <PopulateInfo titles={[
                             {id:1,title:"If you’re registering with Nationwide, your details must match with your MTE registration. If these details are different, you will be unable to login to NFI Online." },
                             {id:2,title:"Please check and confirm before proceeding." }
                        ]}/> 
                    <Grid columns={12} container>
                        <BoxHeader title="Personal Details" />
                        <Grid columns={12} container>
                            <Controls.Select
                                value={state.Title}
                                label="Title"
                                onChange={handleChange}
                                size="small"
                                name="Title"
                                options={getTitle()}
                                error={state.errorMessage.Title}
                                helperText={state.errorMessage.Title}
                            />
                            <Controls.Input
                                label="First Name"
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                value={state.firstName}
                                error={state.errorMessage.firstName}
                                helperText={state.errorMessage.firstName}
                            />
                            <Controls.Input
                                label="Surname"
                                onChange={handleChange}
                                type="text"
                                name="Surname"
                                value={state.Surname}
                                error={state.errorMessage.Surname}
                                helperText={state.errorMessage.Surname}
                                size="small"
                            />
                            <Controls.DatePickers
                                label="Date of birth"
                                value={state.date}
                                onChange={handleDateChange}
                                name="date"
                                error={state.errorMessage.date}
                                helperText={state.errorMessage.date}
                            />
                            <Controls.Select
                                value={state.Role}
                                label="Role"
                                onChange={handleChange}
                                size="small"
                                name="Role"
                                options={getRole()}
                                error={state.errorMessage.Role}
                                helperText={state.errorMessage.Role}
                            />
                            <Controls.Select
                                value={state.Brand}
                                label="Which brand(s) are you registering for?"
                                onChange={handleChange}
                                size="small"
                                name="Brand"
                                options={getBrands()}
                                error={state.errorMessage.Brand}
                                helperText={state.errorMessage.Brand}
                            />
                        </Grid>
                        <PopulateInfo outlined={false} titles={[
                             {id:1,title:"If you’re already registered with Nationwide or The Mortgage Works and would like to register for a second brand, select ‘Both’." }
                        ]}/>
                        <BoxHeader title="Company Details" />
                        <PopulateInfo outlined={false} titles={[
                             {id:1,title:"Please enter your company FCA number and select ‘Search’ to retrieve details from the FCA register." }
                        ]}/>
                        
                        <Grid columns={12} container>
                            <Controls.Input
                                label="Company FCA number"
                                onChange={e => { handleChange(e); setContinueButtonStatus(true) }}
                                type="text"
                                name="CompanyFCAnumber"
                                value={state.CompanyFCAnumber}
                                error={state.errorMessage.CompanyFCAnumber !== ''}
                                helperText={state.errorMessage.CompanyFCAnumber}
                                size="small"
                            />
                            <Grid item xs={12} sm={12} md={6} lg={8}>
                                <LoadingButton startIcon={<SearchIcon />} sx={{ m: 1 }} variant="contained"
                                    loading={fcabuttonloading}
                                    loadingPosition="start"
                                    disabled={state.CompanyFCAnumber === ''}
                                    color="success" size="medium" onClick={findFCA}>Search</LoadingButton>
                            </Grid>
                        </Grid>
                        <BoxHeader title="Declaration" /> 
                        <PopulateInfo  titles={[
                             {id:1,title:"By clicking ‘Agree & Continue’, you confirm you have read and agree to the registration declaration." }
                        ]}/>
                        <Grid columns={12} container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <LoadingButton startIcon={<SendIcon />} sx={{ m: 1 }} variant="contained"
                                    disabled={continuebuttondisabled}
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
