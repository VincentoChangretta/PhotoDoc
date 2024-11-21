const initialState = {
  photoDoc: {
    info: null,
    price: null,
  },
};

const SET_PHOTODOC_INFO = "SET_PHOTODOC_INFO";
const SET_PHOTODOC_PRICE = "SET_PHOTODOC_PRICE";

export const currentBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTODOC_INFO:
      return {
        ...state,
        photoDoc: { ...state.photoDoc, info: action.payload },
      };
    case SET_PHOTODOC_PRICE:
      return {
        ...state,
        photoDoc: { ...state.photoDoc, price: action.payload },
      };
    default:
      return state;
  }
};

export const setCurrentBasketPhotodocInfo = (payload) => ({
  type: SET_PHOTODOC_INFO,
  payload,
});

export const setCurrentBasketPhotodocPrice = (payload) => ({
  type: SET_PHOTODOC_PRICE,
  payload,
});

