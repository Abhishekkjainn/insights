// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDetgz0ONpDK_9F2U2JWz73Q7FOrLhQXn0',
  authDomain: 'insights-1b746.firebaseapp.com',
  projectId: 'insights-1b746',
  storageBucket: 'insights-1b746.appspot.com',
  messagingSenderId: '155235432211',
  appId: '1:155235432211:web:0ae2a31641338355b80ce6',
  measurementId: 'G-R2HCTJMHKB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
