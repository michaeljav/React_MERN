import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from '../../../src/store/ui/uiSlice';

describe('Pruebas en uiSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    // console.log(uiSlice.getInitialState());

    // expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
  });

  //onOpenDateModal, onCloseDateModal
  test('debe de cambiar el onOpenDateModal correctamente ', () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onOpenDateModal());
    // console.log(state);
    expect(state.isDateModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
