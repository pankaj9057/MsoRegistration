

import  * as React  from 'react';
import RoutesData from './RoutesData'

import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import { StaticRouter } from 'react-router-dom/server.mjs'; 
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import MuiDrawer from '@mui/material/Drawer';
import { 
    Link as RouterLink,
    MemoryRouter,
    useLocation
  } from 'react-router-dom';
  import PropTypes from 'prop-types'; 

export function Router(props) {
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
  
  export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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
  
  export function ListItemLink(props) {
    const { icon, primary, to ,onclick,Selected,Disabled} = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef(function Link(itemProps, ref) {
          return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} onClick ={onclick} selected = {Selected} disabled = {Disabled}/>;
        }),
      [to],
    );
  
    return (
      <li>
        <ListItemButton component={renderLink} onClick={onclick} selected={Selected} disabled = {Disabled}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItemButton>
      </li>
    );
  }
  
  ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };
  
 export function GetRouteElem(NavigateToNext)
  { 
   const pathlocation = useLocation();
   var data = RoutesData(NavigateToNext).menuitem.find((e) => e.menupath === pathlocation.pathname)
   return (data.routedata);
  } 
 
  