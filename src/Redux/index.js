import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { currentSizeReducer } from "./currentSizeReducer";
import { currentPhotoDocQuantityReducer } from "./currentPhotoDocQuantityReducer";
import { currentPhotoTypeReducer } from "./currentPhotoType";
import { currentPhotoColorReducer } from "./currentPhotoColors";
import { currentPhotoClothReducer } from "./currentPhotoClothReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { currentPromoCodeReducer } from "./currentPromoCodeReducer";
import { currentPhotoDocOptionReducer } from "./currentPhotoDocOptionReducer";
import { previousPhotoDocReducer } from "./previousPhotoDocReducer";
import { currentBasketReducer } from "./currentBasketReducer";
import { currentDeliveryDateReducer } from "./currentDeliveryDate";
import { currentDeliveryAddressReducer } from "./currentDeliveryAddressReducer";
import { currentCliendPhotoCodeReducer } from "./currentCliendPhotoCodeReducer";

const rootReduser = combineReducers({
  currentSize: currentSizeReducer,
  currentPhotoDocQuantity: currentPhotoDocQuantityReducer,
  currentPhotoType: currentPhotoTypeReducer,
  currentPhotoColor: currentPhotoColorReducer,
  currentPhotoCloth: currentPhotoClothReducer,
  currentPromoCode: currentPromoCodeReducer,
  currentPhotoOptions: currentPhotoDocOptionReducer,
  previousPhotoDoc: previousPhotoDocReducer,
  currentBasket: currentBasketReducer,
  currentDeliveryDate: currentDeliveryDateReducer,
  currentDeliveryAddress: currentDeliveryAddressReducer,
  currentClientPhotoCode: currentCliendPhotoCodeReducer,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
