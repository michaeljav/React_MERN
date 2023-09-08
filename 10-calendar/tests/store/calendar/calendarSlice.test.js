import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvent,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarWithActiveEventsState,
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

  test('onDeleteEvent debe de borrar el evento activo ', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventsState,
      onDeleteEvent()
    );
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(events[0]); // el evento activo el que puede en calendarWithActiveEventState fue state[0] manualmente
  });

  test('onLoadEvent debe de establecer los eventos ', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvent(events));
    expect(state.isLoadingEvents).toBeFalsy(); //
    expect(state.events).toEqual(events);

    //no se dupliquen los eventos
    const newstate = calendarSlice.reducer(state, onLoadEvent(events));
    expect(state.events.length).toBe(events.length);
  });

  test('onLogoutCalendar debe de limpiar el estado ', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventsState,
      onLogoutCalendar()
    );
    expect(state).toEqual(initialState);
  });
});
