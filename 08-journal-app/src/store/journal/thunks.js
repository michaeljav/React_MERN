import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseStore } from '../../firebase/config';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
} from './journalSlice';
import { loadNoate } from '../../helpers/loadNotes';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // console.log('startNewNote');
    // console.log('getState ', getState());
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    //referencia a la collection(tabla) notes
    const newDoc = doc(collection(FirebaseStore, `${uid}/journal/notes`));
    // console.log('startNewNote');

    //insert documento(row)

    const setDocResp = await setDoc(newDoc, newNote);
    // console.log('newDoc ', newDoc);
    // console.log('setDocResp ', setDocResp);

    //creando propiedad a mi nota
    newNote.id = newDoc.id;

    //dispatch new note

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('UID user not exist');
    // console.l og(uid);
    const notes = await loadNoate(uid);
    dispatch(setNotes(notes));
  };
};
