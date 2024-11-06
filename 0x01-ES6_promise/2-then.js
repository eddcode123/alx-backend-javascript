function handleResponseFromAPI(promise) {
  promise.then(() => {
    return {
      "status": 200,
      "body": "success"
    };
  }).catch(Error => Error).finally(() => { console.log("Got a response from the API")});
}
