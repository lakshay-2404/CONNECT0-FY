
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCE-kj9nJR3mxSC5lOoamNWANkACC2l_Mw",
    authDomain: "emhs-402320.firebaseapp.com",
    projectId: "emhs-402320",
    storageBucket: "emhs-402320.appspot.com",
    messagingSenderId: "357089564448",
    appId: "1:357089564448:web:9039aa43f85bace4486945",
    measurementId: "G-46BBJKPQ2S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
   auth.languageCode = 'en';
  const provider= new GoogleAuthProvider();

  const googlelogin = document.getElementById("google-login-btn");
  googlelogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    window.location.href = "../dash.html";
  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  })
  const analytics = getAnalytics(app);