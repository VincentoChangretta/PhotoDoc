const initialState = {
  state: null,
  service: null,
};

const ACTIVATE_MODAL_DATA = "ACTIVATE_MODAL_DATA";
const CLOSE_MODAL = "CLOSE_MODAL";

export const currentInModalFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_MODAL_DATA:
      return { ...state, state: true, service: action.payload };
    case CLOSE_MODAL:
      return { ...state, state: false, service: false };
    default:
      return state;
  }
};

export const modalFormDataCreator = (payload) => ({
  type: ACTIVATE_MODAL_DATA,
  payload,
});

export const closeFormModalCreator = (payload) => ({
  type: CLOSE_MODAL,
  payload,
});
