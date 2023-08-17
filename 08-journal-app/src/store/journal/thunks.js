import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseStore } from '../../firebase/config';
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from './journalSlice';
import { loadNoate } from '../../helpers/loadNotes';
import { fileUpload } from '../../helpers/fileUpload';

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

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: noteActive } = getState().journal;

    const noteToFireStore = { ...noteActive };
    delete noteToFireStore.id;

    //referencia al documento en firestore
    const docRef = doc(FirebaseStore, `${uid}/journal/notes/${noteActive.id}`);
    //si hay cambio que no existen en el objeto noteToFireStore los campos del remoto se mantienen
    await setDoc(docRef, noteToFireStore, { merge: true });
    // console.log('MICHAEL noteActive ', noteActive);
    dispatch(updateNote(noteActive));
  };
};

//Por defecto recibira
export const startLoadingFiles = (files = []) => {
  return async (dispatch) => {
    //bloquear botones
    dispatch(setSaving());
    //Envio de una imagen
    // const resp = await fileUpload(files[0]);
    // console.log(resp);

    const fileUploadPromises = [];
    for (const file of files) {
      //el metodo fileUpload devuelve una promesa ya que es async
      fileUploadPromises.push(fileUpload(file));
    }
    const photosUrls = await Promise.all(fileUploadPromises);
    // const photosUrls = fileUploadPromises;
    // console.log(photosUrls);

    dispatch(setPhotosToActiveNote(photosUrls));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: noteActive } = getState().journal;
    // console.log({ uid, noteActive });

    const docRef = doc(FirebaseStore, `${uid}/journal/notes/${noteActive.id}`);
    // const resp = await deleteDoc(docRef);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(noteActive.id));
    // console.log(resp);
  };
};
