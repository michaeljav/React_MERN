import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //PARA ESTA PRACTICA NO SE RA USADO
    const credentials = GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //User Info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    return {
      ok: false,
      //User Info
      errorCode,
      errorMessage,
      email,
      credential,
    };
  }
};

export const registerUseWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log('michael ANTES DE CREAR', {
      email,
      password,
      displayName,
    });
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log('michael DESPUES DE CREAR ', resp);

    const { uid, photoURL } = resp.user;

    //TODO: update the displayName en firebase

    return { ok: true, uid, photoURL, email, displayName };
  } catch (error) {
    return { ok: false, errorMessage: 'aquie entro' + error.errorMessage };
  }
};
