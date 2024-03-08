// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBhByE_TbPmVWFzB_CNM21wkD6IwzWf91s',
  authDomain: 'developer-daniel-85354.firebaseapp.com',
  projectId: 'developer-daniel-85354',
  storageBucket: 'developer-daniel-85354.appspot.com',
  messagingSenderId: '209109150302',
  appId: '1:209109150302:web:c9589e2e2d069376f9e2cf',
  measurementId: 'G-MNMQY5D33Z'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const database = getFirestore(app)

export { app, auth, database }
