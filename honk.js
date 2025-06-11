auth.signInWithEmailAndPassword(email, password)
  .then(userCredential => { /*...*/ })
  .catch(error => { /*...*/ });

const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", e => {
  e.preventDefault();
  errorMessage.textContent = "";

  const email = form.email.value.trim();
  const password = form.password.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.href = "home.html";
    })
    .catch(error => {
      errorMessage.textContent = error.message;
    });
});