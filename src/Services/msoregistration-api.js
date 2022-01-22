import { RequestBase } from "../Helpers";
import ApiSettings from "../Settings/ApiSettings"

const apiBase = ApiSettings.baseurl;
const apiVersion = ApiSettings.version;

class MsoRegistrationService 
{
  async post(requestbody,apipath) 
  {
    let requestbase = RequestBase.SetBody(requestbody);
    let request = Object.assign({}, requestbase, { method: "POST" });
    let url = apiBase+apiVersion+apipath;
    console.log(url);
    const response = await fetch(url, request);
    return response; 
  }
}

const instance = Object.freeze(new MsoRegistrationService());
export { instance as MsoRegistrationService };

export const getTitle = () => ([
  { id: 'Miss', title: 'Miss' },
  { id: 'Mr', title: 'Mr' },
  { id: 'Mrs', title: 'Mrs' },
  { id: 'Ms', title: 'Ms' },
  { id: 'Dr', title: 'Dr' },
  { id: 'Sir', title: 'Sir' },
])

export const getRole = () => ([
  { id: 'S', title: 'Intermediary' },
  { id: 'A', title: 'Administrator' },
  { id: 'SU', title: 'Supervisor' }, 
])

export const getBrands = () => ([
  { id: 'NBS', title: 'Nationwide' },
  { id: 'TMW', title: 'The Mortgage Works' },
  { id: 'BOTH', title: 'BOTH' }, 
])

