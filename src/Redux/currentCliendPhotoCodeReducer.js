const initialState = {
  code: null,
};

const CHANGE_CODE = "CHANGE_CODE";
const DEL_CODE = "CHANGE_CODE";

export const currentCliendPhotoCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CODE:
    case DEL_CODE:
      return { ...state, code: action.payload };
    default:
      return state;
  }
};

export const currentClientPhotoCodeCreator = payload => ({type: CHANGE_CODE, payload})
export const delClientPhotoCode = payload => ({type: DEL_CODE, payload: null})
