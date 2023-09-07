import {
  calendarSlice,
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarWithEventsState,
  events,
  initialState,
} from '../../fixtures/calendarStates';

describe('Pruebas en calendarSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onSetActiveEvent debe de activar el event ', () => {
    //calendarWithEventsState: ESTE ESTADO NO TIENE EVENTO ACTIVO
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );
    // console.log(calendarWithEventsState);
    // console.log(state);
    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent debe  de agregar el nuevo evento', () => {
    const newEvent = {
      id: '3',
      start: new Date('2023-01-01 13:00:00'),
      end: new Date('2023-01-01 15:00:00'),
      title: 'Cumpleanos de Juan',
      notes: 'comprar jugo',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    // console.log(state);

    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe  de actualizar el evento', () => {
    const updatedEvent = {
      id: '1',
      start: new Date('2023-01-01 13:00:00'),
      end: new Date('2023-01-01 15:00:00'),
      title: 'Cumpleanos de Michael Actualizados',
      notes: 'comprar jugo Actualizado',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );
    // console.log(state);

    expect(state.events).toContain(updatedEvent);
  });
});
