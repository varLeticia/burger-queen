 import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyDFSb3l5T_3Oty20s_yTRi2zA7F1ci7SrY",
    authDomain: "burger-queen-leticia.firebaseapp.com",
    databaseURL: "https://burger-queen-leticia.firebaseio.com",
    projectId: "burger-queen-leticia",
    storageBucket: "burger-queen-leticia.appspot.com",
    messagingSenderId: "704948419861",
    appId: "1:704948419861:web:7755cbf6c7a900f7"
  };
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;