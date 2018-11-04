import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyATkz5tSGWOaekDM-P0E8MUKiZC-A7PemQ",
    authDomain: "loggingsystem-5c1a2.firebaseapp.com",
    databaseURL: "https://loggingsystem-5c1a2.firebaseio.com",
    projectId: "loggingsystem-5c1a2",
    storageBucket: "",
    messagingSenderId: "174715873611"
  };
  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals')
  export const completeGoalRef = firebase.database().ref('completeGoals')