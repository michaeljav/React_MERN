import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store';
import { calendarApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      //actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //creando
      const { data } = await calendarApi.post('/events', calendarEvent);
      // console.log('Michael ', data);

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      // console.log(data);
      const events = convertEventsToDateEvents(data.events);
      // console.log(events);

      dispatch(onLoadEvent(events));
    } catch (error) {
      console.log('Error loading events');
      console.log(error);
    }
  };

  return {
    //*Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //*Methods
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};
