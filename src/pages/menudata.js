
import * as React from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BusinessIcon from '@mui/icons-material/Business';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ContactsIcon from '@mui/icons-material/Contacts';
import DirectionsIcon from '@mui/icons-material/Directions';
import SimpleForm from './SimpleForm';
import CompanyDetails from './CompanyDetails';
import AddressDetails from './AddressDetails';
import SubmissionRoute from './SubmissionRoute';
import ContactDetails from './ContactDetails';
import ConfirmationDetails from './ConfirmationDetails';

function RoutesData(NavigateToNext)
{
  return (
    {
  menuitem:
  [
   {menucaption : "Registration Details",menupath : "/registrationdetails",icon:<AppRegistrationIcon  color="primary" />,routedata:<SimpleForm NavigateToNext = {NavigateToNext}/>,disabled:false,selected:true},
   {menucaption : "Company Name", menupath : "/companyname",icon:<BusinessIcon  color="primary"  />,routedata: <CompanyDetails  NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Address Details", menupath : '/addressdetails',icon:<ImportContactsIcon  color="primary"  />,routedata:<AddressDetails NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Contact Details",menupath : '/contactdetails',icon:<ContactsIcon  color="primary"  />,routedata:<ContactDetails NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Submission Route(s)",menupath : '/submissionroute',icon:<DirectionsIcon  color="primary"  />,routedata:<SubmissionRoute NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false},
   {menucaption : "Confirmation",menupath : '/confirmation',icon:<ConfirmationNumberIcon  color="primary"  />,routedata:<ConfirmationDetails NavigateToNext = {NavigateToNext}/>,disabled:true,selected:false}
  ]})
}

export default RoutesData;