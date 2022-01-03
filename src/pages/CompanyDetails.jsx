import Box from '@mui/material/Box';
import React from 'react'
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import Grid from '@mui/material/Grid';   
import { useNavigate  } from 'react-router-dom';
import LoadingButton from "@mui/lab/LoadingButton";

const companyDetails =  ({NavigateToNext}) => { 
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const handleme= () =>{
        NavigateToNext.NavigateToNext(2)
        navigate("/addressdetails"); 
    }
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
                        <Typography sx={{ m: 1 }} variant="h5">Company Details </Typography>
                    </Grid> 
                </Grid>
                <LoadingButton onClick={handleme}>Test Next Button</LoadingButton>   
            </Box>
        </div>
    )
}
export default companyDetails
