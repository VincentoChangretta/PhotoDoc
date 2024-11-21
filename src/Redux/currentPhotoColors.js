const initialState = {
  colored: true,
};

const COLORED = "COLORED";
const COLORLESS = "COLORLESS";

export const currentPhotoColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLORED:
    case COLORLESS:
      return { ...state, colored: action.payload };
    default:
      return state;
  }
};

export const currentPhotoColoredAction = () => ({type: COLORED, payload: true})
export const currentPhotoColorlessAction = () => ({type: COLORLESS, payload: false})
