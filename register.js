
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdabmu8o5aifvvmP1fAI00DsJ5QK4gZTg",
    authDomain: "loginpage-44a18.firebaseapp.com",
    projectId: "loginpage-44a18",
    storageBucket: "loginpage-44a18.firebasestorage.app",
    messagingSenderId: "483544819798",
    appId: "1:483544819798:web:521e73e40ffe66cc1273f7",
    measurementId: "G-QRTJ5QS48C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
