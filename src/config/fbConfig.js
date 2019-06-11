import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDBQ5GuLt5ERepoa0qIgPi3Stokr6a2FLg",
    authDomain: "my-pg-6473e.firebaseapp.com",
    databaseURL: "https://my-pg-6473e.firebaseio.com",
    projectId: "my-pg-6473e",
    storageBucket: "my-pg-6473e.appspot.com",
    messagingSenderId: "601657898902",
    appId: "1:601657898902:web:a0cd87b5367080c4"
}

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots:true })

export default firebase;