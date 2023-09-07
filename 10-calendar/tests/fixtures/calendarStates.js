export const events = [
  {
    id: '1',
    start: new Date('2023-01-01 13:00:00'),
    end: new Date('2023-01-01 15:00:00'),
    title: 'Cumpleanos de Michael',
    notes: 'comprar pastel',
  },
  {
    id: '2',
    start: new Date('2023-11-21 13:00:00'),
    end: new Date('2023-11-21 15:00:00'),
    title: 'Cumpleanos de Jose',
    notes: 'comprar vekas',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
