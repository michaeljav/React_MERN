// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// import { getEnvironments } from '../helpers';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const env = getEnvironments();
// console.log(env);
const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = getEnvironments();
// const env = getEnvironments();

// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
// apiKey: 'AIzaSyD6BHyzfquL0PjdNEzdb-2_wbFYteWkGSM',
// authDomain: 'react-journalapp-4e05d.firebaseapp.com',
// projectId: 'react-journalapp-4e05d',
// storageBucket: 'react-journalapp-4e05d.appspot.com',
// messagingSenderId: '209796671668',
// appId: '1:209796671668:web:4c2302141a28f3347e0fe1',
// };

//Testing  JEST
// const firebaseConfig = {
//   apiKey: 'AIzaSyBZHtBP39_xDsqHnnQePH0eP77AsQaTtUM',
//   authDomain: 'react-journal-testing-jest.firebaseapp.com',
//   projectId: 'react-journal-testing-jest',
//   storageBucket: 'react-journal-testing-jest.appspot.com',
//   messagingSenderId: '238755849557',
//   appId: '1:238755849557:web:1e88d2722903d7b5e4bbdc',
//   measurementId: 'G-4L3V9H7H07',
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};
console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseStore = getFirestore(FirebaseApp);
