// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfcGaDHoEsMaY8REiXHtowmT8iKBNoqFg",
    authDomain: "food-waste-analytics-dc2b8.firebaseapp.com",
    projectId: "food-waste-analytics-dc2b8",
    storageBucket: "food-waste-analytics-dc2b8.firebasestorage.app",
    messagingSenderId: "356525676921",
    appId: "1:356525676921:web:ee91f1b100c690a911f7a8",
    measurementId: "G-4NHKYZGER7"
  };
// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

// Anonymous sign-in (so writes work under rules that require auth)
auth.signInAnonymously().catch(console.error);