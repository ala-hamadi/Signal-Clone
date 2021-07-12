import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9ajLkF3-Y3JmzmoXvmDarPl-Hs3CmpnM",
  authDomain: "signal-clone-app-f86ed.firebaseapp.com",
  projectId: "signal-clone-app-f86ed",
  storageBucket: "signal-clone-app-f86ed.appspot.com",
  messagingSenderId: "923943328394",
  appId: "1:923943328394:web:36a258cb2b38853cc4eb73",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
