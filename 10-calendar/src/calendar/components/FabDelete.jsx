import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleClickNew = () => {
    startDeletingEvent();
  };

  return (
    <button
      aria-label='btn-delete'
      className='btn btn-danger fab-danger'
      style={{
        display: hasEventSelected ? '' : 'none',
      }}
      onClick={handleClickNew}
    >
      <i className='fas fa-trash-alt'></i>
    </button>
  );
};
