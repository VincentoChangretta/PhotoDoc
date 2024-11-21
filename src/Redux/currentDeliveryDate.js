import { TIME_18 } from "../../public/AppData";

const initialState = {
  currentDeliveryDate: (() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  })(),
  currentDeliveryTime: TIME_18,
};

const CHANGE_DELIVERY_DATE = "CHANGE_DELIVERY_DATE";
const CHANGE_DELIVERY_TIME = "CHANGE_DELIVERY_TIME";

export const currentDeliveryDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DELIVERY_DATE:
      return { ...state, currentDeliveryDate: action.payload };
    case CHANGE_DELIVERY_TIME:
      return { ...state, currentDeliveryTime: action.payload };
    default:
      return state;
  }
};

export const currentDeliveryDateCreator = payload => ({type: CHANGE_DELIVERY_DATE, payload})
export const currentDeliveryTimeCreator = payload => ({type: CHANGE_DELIVERY_TIME, payload})
