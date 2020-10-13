console.log("testing...")

// test that we can get data from the backend

const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/test`, {mode: 'cors'})
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse))
  .catch(() => console.log("Can’t access " + BACKEND_URL + " response. Blocked by browser?"))