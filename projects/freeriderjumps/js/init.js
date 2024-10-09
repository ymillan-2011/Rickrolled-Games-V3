if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyD8oTeZ7aK--CKljAMUPlcAH-SjTgPfb_I",
  "databaseURL": "https://free-rider-jumps.firebaseio.com",
  "storageBucket": "free-rider-jumps.appspot.com",
  "authDomain": "free-rider-jumps.firebaseapp.com",
  "messagingSenderId": "851005615495",
  "projectId": "free-rider-jumps"
});