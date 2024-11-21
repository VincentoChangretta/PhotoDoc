import { PHOTODOC_LOCALSTORE} from "../../public/AppData";

const initialState = {
  ordered: null,
  currentSize: JSON.parse(localStorage.getItem(PHOTODOC_LOCALSTORE)) || null,
};

const CHANGE_SIZE = "CHANGE_SIZE";

export const currentSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIZE:
      localStorage.setItem(PHOTODOC_LOCALSTORE, JSON.stringify(action.payload))
      return { ...state, currentSize: action.payload };
    default:
      return state;
  }
};

export const currentSizeChanger = (payload) => ({type: CHANGE_SIZE, payload})
