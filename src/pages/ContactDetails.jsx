import Box from '@mui/material/Box';
import React from 'react'
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import Grid from '@mui/material/Grid';   
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate  } from 'react-router-dom';

const contactDetails = ({NavigateToNext}) => { 
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const handleme= () =>{
        NavigateToNext.NavigateToNext(4)
        navigate("/submissionroute"); 
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
                        <Typography sx={{ m: 1 }} variant="h5">Contact Details </Typography>
                    </Grid> 
                </Grid>
                <LoadingButton onClick={handleme}>Test Next Button</LoadingButton>  
            </Box>
        </div>
    )
}
export default contactDetails
