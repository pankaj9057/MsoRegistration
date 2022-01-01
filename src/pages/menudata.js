
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

export default
{
  menuitem:
  [
   {menucaption : "Registration Details",menupath : "/registrationdetails",icon:<AppRegistrationIcon  color="primary"  />,routedata:<SimpleForm/>},
   {menucaption : "Company Name", menupath : "/companyname",icon:<BusinessIcon  color="primary"  />,routedata: <CompanyDetails/>},
   {menucaption : "Address Details", menupath : '/addressdetails',icon:<ImportContactsIcon  color="primary"  />,routedata:<AddressDetails/>},
   {menucaption : "Contact Details",menupath : '/contactdetails',icon:<ContactsIcon  color="primary"  />,routedata:<ContactDetails/>},
   {menucaption : "Submission Route(s)",menupath : '/submissionroute',icon:<DirectionsIcon  color="primary"  />,routedata:<SubmissionRoute/>},
   {menucaption : "Confirmation",menupath : '/confirmation',icon:<ConfirmationNumberIcon  color="primary"  />,routedata:<ConfirmationDetails/>}
  ]
};