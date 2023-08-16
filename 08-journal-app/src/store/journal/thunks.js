import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseStore } from '../../firebase/config';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // console.log('startNewNote');
    // console.log('getState ', getState());

    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    //referencia a la collection(tabla) notes
    const newDoc = doc(collection(FirebaseStore, `${uid}/journal/notes`));
    console.log('startNewNote');

    //insert documento(row)

    const setDocResp = await setDoc(newDoc, newNote);
    console.log('newDoc ', newDoc);
    console.log('setDocResp ', setDocResp);
  };
};
