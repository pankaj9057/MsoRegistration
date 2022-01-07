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
        mode: 'cors',
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          'ApiKey': 'hL4bA4nB4yI0vI0fC8fH7eT6'
        },      
        ),
        body:JSON.stringify(requestbody)
      };
    } else
      return {
        method: "POST",
        mode: 'cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'ApiKey': 'hL4bA4nB4yI0vI0fC8fH7eT6'
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
      mode: 'cors',
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        'ApiKey': 'hL4bA4nB4yI0vI0fC8fH7eT6'
      }),
    };
  } else
    return {
      method: "POST",
      mode: 'cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'ApiKey': 'hL4bA4nB4yI0vI0fC8fH7eT6'
      },
    };
})();