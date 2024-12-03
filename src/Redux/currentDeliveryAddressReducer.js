import { DELIVERY_CITYIES } from "../../public/AppData";

const initialState = {
  state: null,
  city: DELIVERY_CITYIES[0],
  address: "",
};

const CHANGE_CITY = "CHANGE_CITY";
const CHANGE_ADDRESS = "CHANGE_ADDRESS";

export const currentDeliveryAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return { ...state, city: action.payload };
    case CHANGE_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export const currentDeliveryAddressCityCreator = (payload) => ({
  type: CHANGE_CITY,
  payload,
});
export const currentDeliveryAddressCreator = (payload) => ({
  type: CHANGE_ADDRESS,
  payload,
});
