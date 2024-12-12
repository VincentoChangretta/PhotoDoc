const initialState = {
  promocode: null,
};

const CHANGE_PROMOCODE = "CHANGE_PROMOCODE";

export const currentPromocodeValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROMOCODE:
      return {promocode: action.payload };
    default:
      return state;
  }
};

export const changePromocodeValueCreator = (payload) => ({
  type: CHANGE_PROMOCODE,
  payload,
});
