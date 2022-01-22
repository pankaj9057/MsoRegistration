import React from 'react';
import {Toolbar, IconButton,Link,Typography,styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
export default function Header(props) { 
    const { open,logo,handleDrawerOpen } = props;
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })
      }));
    return (
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"             
          >
            <MenuIcon />
          </IconButton>
          <img alt="Nationwide Logo" src={logo} className="App-logo" />
          <Typography variant="h6" noWrap component="div">
           <Link underline="none" color="inherit" className="App-name" href="#"> MSO Registration</Link>
          </Typography>
        </Toolbar>
      </AppBar>    
    )
}
