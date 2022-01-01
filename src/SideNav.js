
import Link from "@mui/material/Link";
import logo from "./main_logo_left.png";
import './App.css'; 
import  React  from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';  
import menudata from './pages/menudata'
import PropTypes from 'prop-types'; 
import { useMediaQuery } from 'react-responsive';
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation
} from 'react-router-dom';

import { StaticRouter } from 'react-router-dom/server.mjs'; 

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/registrationdetails">{children}</StaticRouter>;
  }
  
  return (
    <MemoryRouter initialEntries={['/registrationdetails']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function ListItemLink(props) {
  const { icon,selected,disabled, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink} key={primary} selected= {selected} disabled={disabled}>
        {icon ? <ListItemIcon >{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
 
function GetRouteElem()
{
  debugger;   
  const pathlocation = useLocation();
  var data = menudata.menuitem.find((e) => e.menupath === pathlocation.pathname)
 return (data.routedata);
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}; 
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function MiniDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [open, setOpen] = React.useState(!isMobile); 
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  }; 
  return (
    <Box sx={{ display: 'flex' }}>
       <Router>
      <CssBaseline />  
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menudata.menuitem.map((menuitem, index) => (
            <ListItemLink primary={menuitem.menucaption} to={menuitem.menupath} 
              disabled = {index === 2}
              selected ={index === 0}
              icon = {menuitem.icon}
              routedata ={menuitem}
              key={menuitem.menucaption}
              >
            </ListItemLink>
          ))}
        </List>  
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader /> 
        <Routes>
          <Route path="*" element={<GetRouteElem/>} />
        </Routes> 
      </Box> 
      </Router>
    </Box>
  );
}

        