import Box from '@mui/material/Box';
import React from 'react' 
import { useMediaQuery } from 'react-responsive';    
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate  } from 'react-router-dom';
import {ContactRoute} from '../Scripts/RoutesData';
import PageHeader from "../components/PageHeader"; 
const addressDetails = ({NavigateToNext}) => { 
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const handleme= () =>{
        NavigateToNext.NavigateToNext(ContactRoute.RouteNumber)
        navigate(ContactRoute.RouteName); 
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
            >   <PageHeader  title="Address Details" />
                <LoadingButton onClick={handleme}>Test Next Button</LoadingButton>     
            </Box>
        </div>
    )
}
export default addressDetails
