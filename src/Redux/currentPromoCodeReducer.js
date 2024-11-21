const initialState = {
  photoDocPromoCode: false,
  retouchPromoCode: false,
  restorationPromoCode: false,
};

const CHANGE_PHOTODOC_PROMOCODE = "CHANGE_PHOTODOC_PROMOCODE";
const CHANGE_RETOUCH_PROMOCODE = "CHANGE_RETOUCH_PROMOCODE";
const CHANGE_RESTORATION_PROMOCODE = "CHANGE_RESTORATION_PROMOCODE";

export const currentPromoCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHOTODOC_PROMOCODE:
        return {...state, photoDocPromoCode: action.payload}
    case CHANGE_RETOUCH_PROMOCODE:
        return {...state, retouchPromoCode: action.payload}
    case CHANGE_RESTORATION_PROMOCODE:
        return {...state, restorationPromoCode: action.payload}
    default:
      return state;
  }
};

export const photoDocPromoCodeAction = (payload) => ({
  type: CHANGE_PHOTODOC_PROMOCODE,
  payload,
});
export const retouchPromoCodeAction = (payload) => ({
  type: CHANGE_RETOUCH_PROMOCODE,
  payload,
});
export const restorationPromoCodeAction = (payload) => ({
  type: CHANGE_RESTORATION_PROMOCODE,
  payload,
});
