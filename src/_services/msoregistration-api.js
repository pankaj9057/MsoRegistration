import { RequestBase } from "../_helpers";
import ApiSettings from "../Settings/ApiSettings"

const apiBase = ApiSettings.baseurl;
const apiVersion = ApiSettings.version;

class MsoRegistrationService {
  async post(requestbody,apipath) {
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
