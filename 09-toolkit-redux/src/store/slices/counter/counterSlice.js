import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 10,
  times: 20,
};

export const counterSlice = createSlice({
  name: 'counterg',
  initialState: initialState,
  reducers: {
    incrementReducerAction: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    incrementBy: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter = state.counter + action.payload;
    },

    reset: (state) => {
      // console.log(initialState);
      // console.log(state);
      // console.log(state.counter);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter = initialState.counter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementReducerAction, incrementBy, reset } =
  counterSlice.actions;

// export default counterSlice.reducer
