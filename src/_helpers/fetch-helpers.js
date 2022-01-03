export const handleResponse = (response) => {
  return response.text().then((text) => { 
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

class RequestBase{
  SetBody(requestbody)
  {
    if (typeof window !== "undefined") {
      return {
        method: "POST",
        credentials: "include",
        mode: 'cors',
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body:JSON.stringify(requestbody)
      };
    } else
      return {
        method: "POST",
        credentials: "include",
        // mode: 'cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
  }
}

const instance = Object.freeze(new RequestBase());
export { instance as RequestBase }; 


export const requestBase = (() => {
  if (typeof window !== "undefined") {
    return {
      method: "POST",
      credentials: "include",
      mode: 'cors',
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    };
  } else
    return {
      method: "POST",
      credentials: "include",
      // mode: 'cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
})();