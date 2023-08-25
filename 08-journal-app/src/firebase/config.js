// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: 'AIzaSyD6BHyzfquL0PjdNEzdb-2_wbFYteWkGSM',
//   authDomain: 'react-journalapp-4e05d.firebaseapp.com',
//   projectId: 'react-journalapp-4e05d',
//   storageBucket: 'react-journalapp-4e05d.appspot.com',
//   messagingSenderId: '209796671668',
//   appId: '1:209796671668:web:4c2302141a28f3347e0fe1',
// };

//Testing  JEST
const firebaseConfig = {
  apiKey: 'AIzaSyBZHtBP39_xDsqHnnQePH0eP77AsQaTtUM',
  authDomain: 'react-journal-testing-jest.firebaseapp.com',
  projectId: 'react-journal-testing-jest',
  storageBucket: 'react-journal-testing-jest.appspot.com',
  messagingSenderId: '238755849557',
  appId: '1:238755849557:web:1e88d2722903d7b5e4bbdc',
  measurementId: 'G-4L3V9H7H07',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseStore = getFirestore(FirebaseApp);
