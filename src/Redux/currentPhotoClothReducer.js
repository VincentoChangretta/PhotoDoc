const initialState = {
  cloth: false,
  clothForm: "",
  clothCurrentPhotoSize: null,
  clothSaved: null,
};

const WITH_CLOTHES = "WITH_CLOTHES";
const WITHOUT_CLOTHES = "WITHOUT_CLOTHES";
const CHANGE_CLOTHES_FORM = "CHANGE_CLOTHES_FORM";
const SET_PHOTO_CURRENT_SIZE = "SET_PHOTO_CURRENT_SIZE";
const CLOTH_SAVED = "CLOTH_SAVED";

export const currentPhotoClothReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITH_CLOTHES:
    case WITHOUT_CLOTHES:
      return { ...state, cloth: action.payload };
    case CHANGE_CLOTHES_FORM:
      return { ...state, clothForm: action.payload };
    case SET_PHOTO_CURRENT_SIZE:
      return { ...state, clothCurrentPhotoSize: action.payload };
    case CLOTH_SAVED:
      return { ...state, clothSaved: action.payload };
    default:
      return state;
  }
};

export const currentPhotoWithClothAction = () => ({
  type: WITH_CLOTHES,
  payload: true,
});
export const currentPhotoWithoutClothAction = () => ({
  type: WITHOUT_CLOTHES,
  payload: false,
});

export const currentPhotoClothFormAction = (payload) => ({
  type: CHANGE_CLOTHES_FORM,
  payload,
});
export const clothCurrentPhotoSizeCreator = (payload) => ({
  type: SET_PHOTO_CURRENT_SIZE,
  payload,
});

export const currentClothSavedCreator = (payload) => ({
  type: CLOTH_SAVED,
  payload,
});
