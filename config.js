import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyCl-8AWGlS6HaAD9OXTyD5QJ7Uy4D0LSjs",
    authDomain: "bicycle-app-f8f7a.firebaseapp.com",
    projectId: "bicycle-app-f8f7a",
    storageBucket: "bicycle-app-f8f7a.appspot.com",
    messagingSenderId: "878934562616",
    appId: "1:878934562616:web:165340d49c08514f2253cd"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
