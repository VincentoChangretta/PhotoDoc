const initialState = {
  code: null,
};

const SET_CODE = "SET_CODE";
const DELETE_CODE = "DELETE_CODE";

export const currentOrderByCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CODE:
    case DELETE_CODE:
      return { ...state, code: action.payload };
    default:
      return state;
  }
};

export const changerOrderByCode = (payload) => ({ type: SET_CODE, payload });
export const deleteOrderByCode = () => ({ type: SET_CODE, payload: null });
