import {
  FIRST_OPTIONS,
} from "../../public/AppData";

const initialState = {
  optionTypes: FIRST_OPTIONS.type,
  optionColor: FIRST_OPTIONS.color,
  optionCloth: FIRST_OPTIONS.cloth,
};

const OPTION_TYPE = "OPTION_TYPE";
const OPTION_COLOR = "OPTION_COLOR";
const OPTION_CLOTH = "OPTION_CLOTH";

export const currentPhotoDocOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPTION_TYPE:
      return { ...state, optionTypes: action.payload };
    case OPTION_COLOR:
      return { ...state, optionColor: action.payload };
    case OPTION_CLOTH:
      return { ...state, optionCloth: action.payload };
    default:
      return state;
  }
};

export const changeOptionTypeAction = payload => ({type: OPTION_TYPE, payload})
export const changeOptionColorAction = payload => ({type: OPTION_COLOR, payload})
export const changeOptionClothAction = payload => ({type: OPTION_CLOTH, payload})
