// Google Login Authentication
const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');
// Created new instance
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in using event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();
auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    redirect_Page();
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p> <a href="../../index.html"><button class="login__SignInBtn">Take me back to homepage</button></a>`;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
  }
});

function redirect_Page() {
  var tID = setTimeout(function () {
    window.location.href = 'https://fitgeneix.web.app/';
    window.clearTimeout(tID); // clear time out.
  }, 20000);
}
