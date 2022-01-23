
import * as React from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BusinessIcon from '@mui/icons-material/Business';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ContactsIcon from '@mui/icons-material/Contacts';
import DirectionsIcon from '@mui/icons-material/Directions';
import RegistrationDetails from '../pages/RegistrationDetails';
import CompanyDetails from '../pages/CompanyDetails';
import AddressDetails from '../pages/AddressDetails';
import SubmissionRoute from '../pages/SubmissionRoute';
import ContactDetails from '../pages/ContactDetails';
import Documentation from '../pages/Documentation'
import ConfirmationDetails from '../pages/ConfirmationDetails';
import ArticleIcon from '@mui/icons-material/Article';
function RoutesData(NavigateToNext)
{
  return (
    {
  menuitem:
  [
   {menucaption : "Registration Details",menupath : "/registrationdetails",icon:<AppRegistrationIcon  color="primary" />,routedata:<RegistrationDetails NavigateToNext = {NavigateToNext}/>,disabled:false,selected:true},
   {menucaption : "Company Name", menupath : "/companyname",icon:<BusinessIcon  color="primary"  />,routedata: <CompanyDetails  NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Address Details", menupath : '/addressdetails',icon:<ImportContactsIcon  color="primary"  />,routedata:<AddressDetails NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Contact Details",menupath : '/contactdetails',icon:<ContactsIcon  color="primary"  />,routedata:<ContactDetails NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Submission Route(s)",menupath : '/submissionroute',icon:<DirectionsIcon  color="primary"  />,routedata:<SubmissionRoute NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Confirmation",menupath : '/confirmation',icon:<ConfirmationNumberIcon  color="primary"  />,routedata:<ConfirmationDetails NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Documentation",menupath : '/documentation',icon:<ArticleIcon  color="primary"  />,routedata:<Documentation NavigateToNext = {NavigateToNext}/>,disabled:false,selected:false}
  ]})
}

export default RoutesData;

export const RegistrationRoute = {RouteName:  "/registrationdetails",RouteNumber:0};
export const CompanyNameRoute =  {RouteName:  "/companyname",RouteNumber:1};
export const AddressRoute =  {RouteName:  "/addressdetails",RouteNumber:2};
export const ContactRoute =  {RouteName:  "/contactdetails",RouteNumber:3};
export const SubmissionPageRoute =  {RouteName:  "/submissionroute",RouteNumber:4};
export const ConfirmationRoute =  {RouteName:  "/confirmation",RouteNumber:5};