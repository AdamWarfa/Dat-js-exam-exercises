"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  const users = await getUsers("https://raw.githubusercontent.com/AdamWarfa/Dat-js-exam-exercises/main/environments/environment-01/users.json");
  loopUsers();
  function loopUsers() {
    for (const user of users) {
      if (user.active === true) addUsers(user);
    }
  }
}

async function getUsers(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function addUsers(user) {
  document.querySelector("#userlist").insertAdjacentHTML(
    "beforeend",
    /*html*/ `

<li>Name: ${user.name}</li>
<li>Active: ${user.active}</li>
<br>
`
  );
}
