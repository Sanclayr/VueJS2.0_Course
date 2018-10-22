import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBeooAdSZO8rrTOSWDOQ5Eud1chXviMh7U",
    authDomain: "turnout-c3b2e.firebaseapp.com",
    databaseURL: "https://turnout-c3b2e.firebaseio.com",
    projectId: "turnout-c3b2e",
    storageBucket: "turnout-c3b2e.appspot.com",
    messagingSenderId: "58630980999"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')