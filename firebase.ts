// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEFvMlclotn3InQtlmAWdfwa_zjUFMkfI',
  authDomain: 'oskaris-website.firebaseapp.com',
  projectId: 'oskaris-website',
  storageBucket: 'oskaris-website.appspot.com',
  messagingSenderId: '975117442941',
  appId: '1:975117442941:web:0b45d2ace0b38a3da0f614',
  measurementId: 'G-WYV23DRF5W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
