import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'ABC213',
    //   title: '',
    //   body: '',
    //   date: 123456,
    //   imageUrls: [],//'http://foto.jpg','http://foto.jpg',
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      // console.log('MICHAEL action.notes ', action);
      // console.log('MICHAEL T state.notes ', state.notes);
      // console.log('MICHAEL T ', tes);
      // console.log('MICHAEL T note', JSON.stringify(tes));
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });

      //Todo: Mostrar mensaje de actualizacion
      state.messageSaved = `${action.payload.title} updated correctly`;
    },
    setPhotosToActiveNote: (state, action) => {
      //reservamos las anterioes y agregamos las nuevas
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
