import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYYPgS5voUdxVvyETPdlEuoHJSKrCSHKc",
    authDomain: "clone-64c85.firebaseapp.com",
    projectId: "clone-64c85",
    storageBucket: "clone-64c85.appspot.com",
    messagingSenderId: "760282191159",
    appId: "1:760282191159:web:5df5fc3782b25c3830f6b2"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()