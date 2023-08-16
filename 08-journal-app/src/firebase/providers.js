import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
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
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    //TODO: update the displayName en firebase
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return { ok: true, uid, photoURL, email, displayName };
  } catch (error) {
    const { message } = error.customData._tokenResponse.error;
    // console.log('MICHAEL ERROR DEVOLVER: ', JSON.stringify(error));
    // console.log('MICHAEL ', message);
    return { ok: false, errorMessage: message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return { ok: true, uid, photoURL, displayName };
  } catch (error) {
    // const { message } = error.customData._tokenResponse.error;
    // return { ok: false, errorMessage: message };
    return { ok: false, errorMessage: error.code };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
