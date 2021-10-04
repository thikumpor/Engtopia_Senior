import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIlY-fC_h6qaE2BvCyOyMKUxxjXj8G9r4",
    authDomain: "engtopia-e9bef.firebaseapp.com",
    projectId: "engtopia-e9bef",
    storageBucket: "engtopia-e9bef.appspot.com",
    messagingSenderId: "534626487444",
    appId: "1:534626487444:web:940c51f59d098fcc457881",
    measurementId: "G-7FZDFCJTTV"
  };
  
  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);
  firebase.analytics();