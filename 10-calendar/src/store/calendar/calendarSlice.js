import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   _id: new Date(),
//   title: 'Cumpleanos del jefe',
//   notes: 'comprar pastel',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     _id: '123',
//     name: 'Michael',
//   },
// };

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [
      // tempEvent
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((e) => {
        if (e._id === payload._id) {
          return payload;
        }
        return e;
      });
    },
    onDeleteEvent: (state) => {
      if (!state.activeEvent) return;
      state.events = state.events.filter(
        (e) => e._id !== state.activeEvent._id
      );
      state.activeEvent = null;
    },
    onLoadEvent: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.events = payload;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id); // return true if event exists
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvent,
} = calendarSlice.actions;
