import firebase from "firebase";
console.log(process.env, "key");
console.log(process.env.REACT_APP_API_KEY, "key key");

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "react-firebase-ef74e.firebaseapp.com",
  databaseURL: "https://react-firebase-ef74e.firebaseio.com",
  projectId: "react-firebase-ef74e",
  storageBucket: "react-firebase-ef74e.appspot.com",
  messagingSenderId: "955712029169",
  appId: "1:955712029169:web:8f8197915e019f276a8450",
  measurementId: "G-1X4H0GVV7S"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
