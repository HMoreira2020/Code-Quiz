console.log("testing...")
const signInForm = document.getElementById('myForm')[0]
const startButton = document.getElementById('start-btn')
// startButton.addEventListener('click', startGame)
const form = document.getElementById('signin')

myForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const usersUrl = "http://localhost:3000/users"
  let formData = {
    name: document.getElementById("user-name").value,
    email: document.getElementById("user-email").value
  };

  fetch(usersUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(function(json) {
      console.log(json);
    //  let userEmail = json.email
    // "skfj@gmail.com"
    // let userName= json.name
      // let userId = json.id 
    // "Chris "  append these to a div to display user name 
      form.classList.add("hide");
      startButton.classList.remove("hide")

    })
    .catch(error => console.log(error));
  //how do I sign in??? where do i grab the username input? I sent this users#create to create a user 
  //then hide the sign in form. How do I do that? it's taking me to a new page 
  //does it pass through users#create? we are posting to users which is index? 
  //when I submit it creates a new user and takes me to /users but only displays that user created....why does it redirect and why only that user if we are on /users? 
  
})



function startGame() {
  console.log('Started')
}

function setNextQuestion() {

}


function selectAnswer() {

}





// test that we can get data from the backend

const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/test`, {mode: 'cors'})
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse))
  .catch(() => console.log("Can’t access " + BACKEND_URL + " response. Blocked by browser?"))