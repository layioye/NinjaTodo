
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAdw8rMrxCfXFd0566KFZ-ZD-0QbZ_0lv4",
    authDomain: "invicible-game.firebaseapp.com",
    databaseURL: "https://invicible-game.firebaseio.com",
    projectId: "invicible-game",
    storageBucket: "invicible-game.appspot.com",
    messagingSenderId: "809062691549",
    appId: "1:809062691549:web:3b4134e009025693232134"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;