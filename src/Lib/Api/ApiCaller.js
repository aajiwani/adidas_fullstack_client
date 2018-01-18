function checkForStatusErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

class ApiCaller {
  Get(url) {
    return fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => checkForStatusErrors(response))
      .then(response => response.json());
  }

  Post(url, params) {
    let formBody = [];
    for (let property in params) {
      if (params.hasOwnProperty(property)) {
        var encodedKey = property;
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
    }
    formBody = formBody.join("&");

    return fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    })
      .then(response => checkForStatusErrors(response))
      .then(response => response.json());
  }

  Put(url, params) {
    let formBody = [];
    for (let property in params) {
      if (params.hasOwnProperty(property)) {
        var encodedKey = property;
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
    }
    formBody = formBody.join("&");

    return fetch(url, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    })
      .then(response => checkForStatusErrors(response))
      .then(response => response.json());
  }

  Delete(url) {
    return fetch(url, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => checkForStatusErrors(response))
      .then(response => response.json());
  }
}

const inst = new ApiCaller();
Object.freeze(inst);

export default inst;
