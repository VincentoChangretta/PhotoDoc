import {
  PHOTODOC_INITIAL_ELECTRO_QUANTITY,
  PHOTODOC_PHYSICAL_QUANTITY,
} from "../../public/AppData";

const initialState = {
  currentPhysicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
  currentElectroQuantity: PHOTODOC_INITIAL_ELECTRO_QUANTITY,
};

const ADD_QUANTITY = "ADD_QUANTITY";
const GET_QUANTITY = "GET_QUANTITY";
const SET_QUANTITY = "SET_QUANTITY";

export const currentPhotoDocQuantityReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_QUANTITY:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type] + 1,
      };
    case GET_QUANTITY:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type] - 1,
      };
    case SET_QUANTITY:
      return {
        ...state,
        [action.payload.type]: action.payload.quantity,
      };
    default:
      return state;
  }
};

export const addCurrentPhotoDocQuantity = (qunatityType) => ({
  type: ADD_QUANTITY,
  payload: { type: qunatityType },
});
export const getCurrentPhotoDocQuantity = (qunatityType) => ({
  type: GET_QUANTITY,
  payload: { type: qunatityType },
});
export const setCurrentPhotoDocQuantity = (qunatityType, quantity) => ({
  type: SET_QUANTITY,
  payload: { quantity, type: qunatityType },
});
