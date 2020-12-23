importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBuApgFvH0M7EfzRlFjBs6-8izyQ0X3_f8',
  authDomain: 'drivers-ea731.firebaseapp.com',
  projectId: 'drivers-ea731',
  storageBucket: 'drivers-ea731.appspot.com',
  messagingSenderId: '671662680213',
  appId: '1:671662680213:web:3678ae15bde71aa979d39c',
  measurementId: 'G-1S4MVFDMY5'
});

const messaging = firebase.messaging();
